---
title: برنامه نویسی شی گرا برای میکروکنترلر ها (بخش یکم)
date:   2024-10-22 15:01:35 +0300
image:  '/assets/img/post/post-2.jpg'
tags:   [EmbeddedSoftware, cpp]
categories: [Blogging, Demo]
author: farzin-rb70
description: Examples of text, typography, math equations, diagrams, flowcharts, pictures, videos, and more.
pin: true
math: true
mermaid: true
lang: fa
---

## چگونه با ++C برای سیستم های امبدد کد نویسی کنیم؟

### مرحله اول : چراغ چشمک زن

> همیشه برای شروع یک پروژه الکترونیکی پای یک LED چشمک زن در میان است!

در برنامه نویسی OOP همیشه دید ما به هر عضو در برنامه به صورت یک شی است. پس ما برای اینکه یک LED چشمک زن درست کنیم اول باید یک قالب برای شی مورد نظر ایجاد کنیم سپس میتوانیم هر تعداد شی که دوست داشتیم با این قالب بسازیم.
برای نوشتن برنامه Blink Led ما به عناصر مختلفی در زبان ++C  نیاز داریم. 

1. فایل های include شده
2. کلاس Led
3. سازنده کلاس (constructor) - اعضای کلاس (members) 
4. متد های روشن کردن - خاموش کردن و معکوس کردن وضعیت ( toggle) با دسترسی مستقیم به حافظه 
5. روتین اصلی (main) و روتین تکرار بی‌نهایت (while)

کد چشمک زن در نهایت به صورت زیر است. اگر این روش نوشتار برای شما هم جذاب به نظر میرسد در ادامه با بخش های مختلف این کد آشنا میشیم.
``` c++
#include <cstdint>
#include "mcal_reg.h"
class led
{
public:
    // Use convenient class-specific typedefs.
    typedef std::uint8_t port_type;
    typedef std::uint8_t bval_type;
    // The led class constructor.
    led(const port_type p,
        const bval_type b) : port(p),
                             bval(b)
    {
        // Set the port pin value to low.
        *reinterpret_cast<volatile bval_type *>(port) &= static_cast<bval_type>(~bval);
        // Set the port pin direction to output.
        // Note that the address of the port direction
        // register is one less than the address
        // of the port value register.
        const port_type pdir = port - 1U;
        *reinterpret_cast<volatile bval_type *>(pdir) |= bval;
    }

    void on() const
    {
        *reinterpret_cast<volatile bval_type *>(port) |= bval;
    }

    void off() const
    {
        *reinterpret_cast<volatile bval_type *>(port) &= ~bval;
    }

    void toggle() const
    {
        // Toggle the LED via direct memory access.
        *reinterpret_cast<volatile bval_type *>(port) ^= bval;
    }

private:

    // Private member variables of the class.
    const port_type port;
    const bval_type bval;
};

namespace

{

    // Create led_b5 on portb.5.
    const led led_b5{
        mcal::reg::portb,
        mcal::reg::bval5};
}

int main()

{
    // Toggle led_b5 in a loop forever.
    for (;;)
    {
        led_b5.toggle();
    }
}
```

کلاس در ++C شروع برنامه نویسی به روش OOP است و همه‌ی ویژگی های یک شی رو در کنار هم جمع میکند. در مثال Led یک کلاس شامل ویژگی های زیر است:
+  ادرس پورتی (PORT) که LED به آن متصل است. 
+ شماره پین در آن پورت که به LED اتصال پیدا کرده

```c++
    const port_type port;
    const bval_type bval;
```

 و از یک LED انتظار رفتار هایی داریم که همان متد های ما را شامل میشود. ما انتظار داریم که LED ما:
+ روشن شود(On)
+ خاموش شود(Off)
+ وضعیت خود را تغییر دهد (Toggle)

```c++
    void on() const
    {
    }
    void off() const
    {
    }
    void toggle() const
    {
    }
```

سازنده شی (Constructor) از متد هایی است که برای یک کلاس واجب است(البته، اما و اگر هم دارد ولی در ابتدای مسیر فرض کنیم که همیشه باید این متد را تعریف کنیم)  - متد سازنده در زمان ایجاد یک شی فراخوانی میشود. پس میتوانیم از طریق این متد مقادیر ثابت که برای ویژگی های شی نیاز داریم را به عنوان مقادیر ورودی این متد وارد کنیم ( که در مثال ما همان پورت و پین مرتبط با LED است.)

```c++
led(const port_type p,

        const bval_type b) : port(p),
                             bval(b)
    {
        // Set the port pin value to low.
        *reinterpret_cast<volatile bval_type *>(port) &= static_cast<bval_type>(~bval);
        // Set the port pin direction to output.
        // Note that the address of the port direction
        // register is one less than the address
        // of the port value register.
        const port_type pdir = port - 1U;
        *reinterpret_cast<volatile bval_type *>(pdir) |= bval;
    }
```

حال برای مقدار دادن به رجیستر PORT از طریق دسترسی مستقیم به حافظه در ++C  از خط زیر استفاده میشود.

```c++
*reinterpret_cast<volatile bval_type *>(port) |= bval;
```

که قبلا معادل C آن را به شکل زیر مینوشتیم:

```c++
*((volatile bval_type*) port) ^= bval;
```

پس برای متد های روشن/ خاموش/تغییر وضعیت متد ها را به روش زیر مینویسیم:

```c++
    void on()
    {
        *reinterpret_cast<volatile bval_type *>(port) |= bval;
    }

    void off()
    {
        *reinterpret_cast<volatile bval_type *>(port) &= ~bval;
    }

    void toggle() const
    {
        // Toggle the LED via direct memory access.
        *reinterpret_cast<volatile bval_type *>(port) ^= bval;
    }
```

حالا باید یک برنامه ++C را با گذاشتن بقیه موارد مورد نیاز کامل کنیم:

```c++
#include <cstdint>
#include "mcal_reg.h"
class led
{
public:
    // Use convenient class-specific typedefs.
    typedef std::uint8_t port_type;
    typedef std::uint8_t bval_type;
    // The led class constructor.
    led(const port_type p,
        const bval_type b) : port(p),
                             bval(b)
    {
        // Set the port pin value to low.
        *reinterpret_cast<volatile bval_type *>(port) &= static_cast<bval_type>(~bval);
        // Set the port pin direction to output.
        // Note that the address of the port direction
        // register is one less than the address
        // of the port value register.
        const port_type pdir = port - 1U;
        *reinterpret_cast<volatile bval_type *>(pdir) |= bval;
    }

    void on() const
    {
        *reinterpret_cast<volatile bval_type *>(port) |= bval;
    }

    void off() const
    {
        *reinterpret_cast<volatile bval_type *>(port) &= ~bval;
    }

    void toggle() const
    {
        // Toggle the LED via direct memory access.
        *reinterpret_cast<volatile bval_type *>(port) ^= bval;
    }

private:

    // Private member variables of the class.
    const port_type port;
    const bval_type bval;
};

namespace
{
    // Create led_b5 on portb.5.
		{
      0x25, // Address of portb.
		0x20 // Bit-value of portb.5.
		};
}

int main()

{
    // Toggle led_b5 in a loop forever.
    for (;;)
    {
        led_b5.toggle();
    }
}
```


اما بک برنامه نویس خوب هیج وقت از Magic Number ها در کد ها استفاده نمی‌کند پس باید برای ادرس رجیستر ها تعاریف را به صورتی بنویسیم که در زمان کامپایل ترجمه شود. در زبان C از کلید واژه define  برای این کار استفاده میکردیم . اما ++C امکان بیشتری برای ما ایجاد میکند و این بار تعاریف را به شکل زیر نوشته و کد را باز نویسی میکنیم:

```c++
namespace mcal
{
    // Compile-time constant register addresses.
    namespace reg
    {
        // The address of portb.
        constexpr std::uint8_t portb = 0x25U;
        // The values of bit0 through bit7.
        constexpr std::uint8_t bval0 = 1U;
        constexpr std::uint8_t bval1 = 1U << 1U;
        constexpr std::uint8_t bval2 = 1U << 2U;
        constexpr std::uint8_t bval3 = 1U << 3U;
        constexpr std::uint8_t bval4 = 1U << 4U;
        constexpr std::uint8_t bval5 = 1U << 5U;
        constexpr std::uint8_t bval6 = 1U << 6U;
        constexpr std::uint8_t bval7 = 1U << 7U;
    }
}
```

> ممکن است که این کد کامل نباشد!  ممکن هست شما متد های بیشتری برای یک ال ای دی متصور بشید. پس دست به کار بشید و ادامه این کد رو خودتون دست بگیرید! :)

در پست بعدی در مورد این صحبت میکنیم که زبان ++C چه امکاناتی به ما میدهد و در چه بخش هایی با C متفاوت است. 
و در پست های بعدی در مورد بحث چالش بر انگیز بازدهی ++C  نسبت به C مینویسیم و تکنیک های OOP در برنامه نویسی برای میکروکنترلر ها که همواره مسئله منابع و سرعت اجرا مطرح هست.

وقت خوش و ایام به کام :)


