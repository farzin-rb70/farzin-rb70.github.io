---
title: مارک داون چیست و چطوری باید با آن کارکرد؟
date:   2018-04-24 15:01:35 +0300
image:  '/images/post1.png'
tags:   [travel, notes]
---
آموزش کار با Markdown
=====================

اگر که فقط یک بار هم با Markdown کار کرده باشید می‌دانید که چه ابزار فوق‌العاده‌ای برای نوشتن محتوا در وب است. تقریبا می‌توان گفت که Markdown سریع‌ترین متد در بین متدهای دیگر برای نوشتن است. البته استفاده از Markdown به یک جریان یادگیری نیاز دارد، به همین دلیل ما در این مطلب سعی داریم تا موضوعات اصلی و مهم Markdown را به صورتی بسیار ساده بیان کنیم. همچنین در پایان این مطلب چند تکنیک و ابزار کاربردی را نیز بررسی خواهیم کرد.

**Markdown چیست؟**
------------------

Markdown یک سینتکس قالب‌دهی به متن است که در وبلاگ‌نویسی، مستندنویسی و… استفاده می‌شود. با استفاده از Markdown شما می‌توانید محتوای ساختارمندی را برای وب نوشته و در نهایت به HTML تبدیل کنید.

Markdown در سال ۲۰۰۴ توسط John Gruber ساخته شد. ایده اصلی آن هم سریع نوشتن متون در دنیای وب بود، چرا که استفاده از تگ‌های HTML برای نوشتن یک مطلب وبلاگی در آن زمان بسیار آزاردهنده بود. 

**چرا Markdown تا به این حد محبوب است؟**
----------------------------------------

شاید متوجه شده باشید که ما برای نوشتن Markdown نیز باید کدنویسی مختصری بکنیم. حال ممکن است بپرسید که چرا از همان ادیتورهای گرافیکی استفاده نکنیم؟ ادیتورهایی که برای بولد کردن یک متن تنها کافی‌ست که روی یک دکمه کلیک کنید. خب شاید شما درست بگویید اما نوشتن سینتکس Markdown در روال نوشتن صورت می‌گیرد و از این رو کمتر نویسندگان را با حواس‌پرتی روبرو می‌سازد. 

زمانی که شما یک متن بلند را می‌نویسید و قصد دارید در میان نوشتن‌تان یک کلمه را بولد کنید، باید دست از نوشتن برداشته و سراغ دکمه B بروید. اما در مارک‌داون شما نیازی به چنین کاری ندارید، چرا که می‌توانید در خلال نوشتن، متن مورد نظرتان را نیز بولد کنید. 

از طرفی دیگر زمانی که شما قصد ساخت یک سیستم مدیریت محتوا را داشته باشید، پیاده‌سازی یک ادیتور گرافیکی ممکن است سخت باشد، البته می‌توان از ابزارهای موجود نیز استفاده کرد اما انجام چنین کاری باعث می‌شود که حجم سیستم مدیریت محتوا بالاتر برود، به همین خاطر پیاده‌سازی Markdown در آن منطقی‌تر خواهد بود.

### **سینتکس پایه‌ای Markdown**

یکی از اهداف روشنی که Markdown دنبال می‌کند این است که به آسانی توسط انسان‌ها خوانده شود. با مشاهده سینتکس مارک‌داون می‌توانید متوجه شوید که با سینتکسی بسیار ساده و درک‌پذیر همراه هستید.

بیایید با المان‌هایی که بیشترین استفاده را در یک متن دارند آشنا شویم:

### **عناوین**

*   \# Heading 1
*   \## Heading 2
*   \### Heading 3

عناوین در سینتکس مارک‌داون با استفاده از کاراکتر # پیاده‌سازی می‌شود. تعداد استفاده از این کاراکتر نشان دهنده سطح عنوان است. استفاده از یک # به معنای تگ h1، استفاده از دو # به معنای تگ h2 و… است. همانطور  که می‌دانید ما در HTML قابلیت استفاده از h1 تا h6 را داریم، از این رو در مارک‌داون نیز می‌توانیم تا ۶ کاراکتر # جلو برویم.

### **متن**

*   \*italic\*
*   \*\*bold\*\*
*   \*\*\*bold-italic\*\*\*
*   \[link\]([https://example.com](https://example.com/))

اگر قصد کج کردن یک متن را دارید آن را در بین دو ستاره قرار دهید. اگر قصد بولد کردن متنی را دارید آن‌ را در بین چهار ستاره قرار دهید و در نهایت اگر قصد استفاده ترکیبی از این دو مورد را دارید می‌توانید متن را در بین ۶ ستاره قرار دهید.

اگر می‌خواهید که یک لینک را در متن‌تان قرار دهید، متن اصلی لینک را در یک کروشه قرار داده و پس از آن لینک مربوطه را در یک پرانتز قرار دهید. 

### **تصاویر**

    ![m'lady](https://i.imgur.com/v8IVDka.jpg)

سینتکس مربوط به قرار دادن تصویر شباهت بسیار زیادی به لینک دارد، تنها یک تفاوت جزئی وجود دارد و آن استفاده از یک علامت تعجب در قبل از کروشه است. متنی که در داخل کروشه نیز قرار می‌گیرد به عنوان alt text برای تصویر تنظیم خواهد شد.

در برخی از ادیتورهای مارک‌داون نیازی به انجام چنین کاری نیست، تنها از طریق دکمه آپلود کارتان را به تمامی انجام می‌دهید. 

**لیست‌ها**

\* Milk

\* Bread

    \* Wholegrain

\* Butter

پیاده‌سازی لیست در مارک‌داون کاری بسیار آسان است، برای ساخت یک لیست دایره‌ای تنها کافی‌ست که قبل از متن هر آیتم از علامت (\*,-,+) استفاده بکنید. برای ساخت یک لیست تو در تو نیز آیتم‌های زیرین را با استفاده از space و یا tab به جلو بیاورید.

 لیست‌های عددی نیز درست به همین شکل هستند با این تفاوت که قبل از متن آیتم‌ها بجای علامت‌های (\*,-,+) باید از اعداد استفاده کنید:

1\. Tidy the kitchen

2\. Prepare ingredients

3\. Cook delicious things

**نقل قول**

    > To be or not to be, that is the question.

برای استفاده از نقل قول در مارک‌داون تنها کاری که باید انجام دهید افزودن یک علامت < به قبل از نوشته‌های‌تان است. 

### **المان‌های دیگر**

### **خط افقی**

برای کشیدن یک خط افقی در مارک‌داون تنها کافی‌ست سه خط تیره را وارید کنید:

    ---

همانطور که می‌دانید این دستور جایگزینی برای <hr> خواهد بود.

### **نمایش قطعه کد**

برای نمایش قطعه کدها در مارک‌داون می‌توانید آن‌ها را در بین دو علامت \`\`\`code\`\`\` قرار دهید. خروجی این کار باعث می‌شود که متن code به صورت یک قطعه کد در بین یکسری متن ظاهر شود. 

دقت کنید که \`\`\` به معنی backtick می‌باشد سه backtick  باز و کد و در نهایت سه backtick بسته. شما میتونید مکان قرار گیری دکمه backtick را در تصویر زیر مشاهده کنید : 

یک روش دیگر برای نمایش قطعه کدها جلو آوردن آن‌ها با ۴ space است. برای مثال:

    ```
        .my-link {
            text-decoration: underline;
        }
    ```

**عناوین و لیست‌ مرجع**

    **The quick brown [fox][1], jumped over the lazy [dog][2].**
    
    [1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
    [2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"

اگر می‌خواهید مانند صفحات ویکی‌پدیا لیست مرجع داشته باشید می‌توانید آن‌ها را به صورت بالا ایجاد کنید. در مقابل کلمه fox ما یک شماره را می‌بینیم که این شماره در زیر به یک آدرس اشاره می‌کند. این روشی ساده برای ساخت لیست مرجع است. در پایان هر لینک نیز می‌توانید یک متن را مشاهده کنید که در بین دو علامت کوتیشن قرار گرفته است. این متن‌ها title لینک شما هستند.

می‌توانید در تمام لینک‌ها از این متن استفاده کنید:

    [Dog](https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog")

### **نادیده گرفتن**

اگر بخواهید دو ستاره را در یک متن بدون کج کردن آن نمایش دهید باید از دو بک-اسلش استفاده کنید. این کار باعث نادیده گرفتن سینتکس مارک‌داون می‌شود. برای مثال:

    \*literally\*

خروجی این قطعه کد متن \*literally\* خواهد بود.

### **قرار دادن HTML**

یکی از جذاب‌ترین ویژگی‌های مارک‌داون این است که به شما قابلیت استفاده مستقیم از HTML را می‌دهد. زمانی که نتوانستید با مارک‌داون چیزی که می‌خواهید را پیاده‌سازی کنید می‌توانید به سادگی کدهای HTML مورد نیازتان را قرار دهید:

    <button class="button-save large">Big Fat Button</button>

### **سرعت‌ دهی با استفاده از میانبرهای کیبورد**

برخی از ادیتورهای مبتنی بر مارک داون به شما قابلیت استفاده از یکسری شورت‌کات یا میانبر را می‌دهند. اگر از یک ادیتور ساده استفاده می‌کنید ممکن است چنین قابلیتی برای شما فعال نباشد اما می‌توانید با استفاده از کلیدهای زیر یک امتحانی بکنید:

*   Ctrl + B for Bold
*   Ctrl + I for Italic
*   Ctrl + K for a link
*   Ctrl + H for H2 and H3

### **تبدیل HTML به MD**

اگر به مارک‌داون علاقه پیدا کرده‌اید و می‌خواهید به صورت کامل از آن استفاده کنید می‌توانید فایل‌های قدیمی‌ HTMLتان را نیز به یک MD تبدیل نمایید. برای این کار از ابزارهایی مانند [convert html to md](https://cloudconvert.com/html-to-md) و [Convert HTML to Markdown](https://www.browserling.com/tools/html-to-markdown) استفاده کنید.

**اپلیکیشن‌های مناسب برای نوشتن Markdown**
------------------------------------------

ممکن است بخواهید که متن‌های روزانه‌تان را نیز در مارک‌داون بنویسید. برای چنین کاری استفاده از یک کد ادیتور انتخابی منطقی نیست، بجای آن می‌توان از اپلیکیشن‌های موجود برای نوشتن مارک داون استفاده کرد.

برای سیستم عامل مک انتخاب‌های گسترده‌ای وجود دارد که می‌توانید در زیر آن‌ها را مشاهده کنید:

*   [Mou](https://25.io/mou/) - Free
*   [iA Writer](https://ia.net/writer/mac/) - $19.99
*   [Desk](https://desk.pm/) - $29.99
*   [ByWord](https://bywordapp.com/) - $11.99
*   [Day One](https://dayoneapp.com/) - $9.99
*   [SublimeText](https://www.macstories.net/roundups/sublime-text-2-and-markdown-tips-tricks-and-links/) - $70

برای سیستم عامل ویندوز نیز انتخاب‌هایی وجود دارد که می‌توانید در زیر آن‌ها را مشاهده بکنید:

*   [WriteMonkey](https://writemonkey.com/index.php) - Free
*   [MarkdownPad](https://markdownpad.com/) - Free + $14.99 Pro version
*   [Texts](https://www.texts.io/) - $14.50
*   [SublimeText](https://www.macstories.net/roundups/sublime-text-2-and-markdown-tips-tricks-and-links/) - $70

برای سیستم عامل‌های موبایل نیز انتخاب‌های مناسبی وجود دارد. برای iOS می‌توانید از موارد زیر استفاده کنید:

*   [Werdsmith](https://werdsmith.com/) - Free
*   [iA Writer](https://ia.net/writer/ios) - $9.99
*   [ByWord](https://bywordapp.com/) - $5.99
*   [Day One](https://dayoneapp.com/) - $4.99

برای آندروید نیز می‌توانید از موارد زیر استفاده کنید:

*   [Draft](https://play.google.com/store/apps/details?id=com.mvilla.draft) - Free
*   [MarkDrop](https://play.google.com/store/apps/details?id=net.keepzero.markdrop) - Free
*   [Jotterpad X](https://play.google.com/store/apps/details?id=com.jotterpad.x) - Free
*   [Writer](https://play.google.com/store/apps/details?id=com.jamesmc.writer) - Free
*   [iA Writer](https://ia.net/writer/android) - $5.99

### **ابزارهای آنلاین**

ابزارهای آنلاین بسیار زیادی وجود دارند که با استفاده از آن‌ها می‌توانید مارک‌داون خود را نوشته و از آن پیش‌نمایش بگیرید. تعدادی از این ابزارها را می‌توانید در زیر مشاهده بکنید:

*   [dillinger.io](https://dillinger.io/)
*   [stackedit.io](https://stackedit.io/)
*   [markdown-editor](https://jbt.github.io/markdown-editor/)
*   [editor.md](https://pandao.github.io/editor.md/en.html)
*   [typora.io](https://typora.io/)

**اهمیت یادگیری و استفاده از Markdown**
---------------------------------------

مارک داون (Markdown) یک زبان نشانه‌گذاری سبک است که برای فرمت‌بندی متون طراحی شده است. این زبان از سادگی و خوانایی بالایی برخوردار است، به طوری که متن نوشته شده با مارک داون حتی بدون تبدیل به HTML هم قابل خواندن است. اهمیت و کاربردهای مارک داون در موارد زیر خلاصه می‌شود:

*   **سادگی و سرعت**: نوشتن متون با استفاده از مارک داون بسیار سریع و آسان است. برای مثال، برای ایجاد یک عنوان، کافی است تا یک یا چند علامت # قبل از متن قرار دهید.
    
*   **پشتیبانی گسترده**: بسیاری از برنامه‌ها و سرویس‌های وب، مانند GitHub، Stack Overflow، و بسیاری از ویرایشگرهای متن، از مارک داون پشتیبانی می‌کنند. این امر اشتراک‌گذاری و خواندن متون را در بین ابزارها و پلتفرم‌های مختلف آسان می‌کند.
    
*   **تبدیل آسان به فرمت‌های دیگر**: متون نوشته شده با مارک داون می‌توانند به آسانی به فرمت‌های دیگر مانند HTML، PDF و دیگر فرمت‌های نشر تبدیل شوند، که این امر آن‌ها را برای انتشار در وب و چاپ مناسب می‌سازد.
    
*   **مناسب برای نوشتن مستندات**: مارک داون به ویژه برای نوشتن مستندات فنی و راهنماها محبوب است، زیرا ساختار متن را به طور واضح نشان می‌دهد و اجازه می‌دهد تا کد، لیست‌ها، جداول و سایر عناصر به راحتی گنجانده شوند.
    
*   **سهولت یادگیری**: نسبت به سایر زبان‌های نشانه‌گذاری مانند HTML، مارک داون بسیار ساده‌تر است. این امر آن را به گزینه‌ای عالی برای کسانی تبدیل می‌کند که به دنبال راهی آسان برای نوشتن و فرمت‌بندی متون خود هستند.
    
*   **قابلیت همکاری و اشتراک‌گذاری**: فایل‌های مارک داون به راحتی قابل اشتراک‌گذاری و ویرایش توسط چندین نفر هستند، که آن‌ها را برای پروژه‌های گروهی و همکاری‌های آنلاین ایده‌آل می‌سازد.
    

با توجه به این مزایا، مارک داون به یک ابزار محبوب برای نویسندگان، توسعه‌دهندگان نرم‌افزار، محققان و بسیاری از حرفه‌های دیگر تبدیل شده است.

ابزارهای Markdown
-----------------

ابزارهای مارک‌داون به کاربران کمک می‌کنند تا متونی را که با نشانه‌گذاری مارک‌داون نوشته شده‌اند، را ویرایش کنند. مارک‌داون یک زبان نشانه‌گذاری سبک است که برای فرمت‌بندی متون ساده طراحی شده است. این ابزارها شامل ویرایشگرهای متن، افزونه‌های مرورگر، برنامه‌های تحت وب و کتابخانه‌های نرم‌افزاری می‌شوند که می‌توانند فایل‌های مارک‌داون را به فرمت‌های دیگر مانند HTML تبدیل کنند. در اینجا چند مثال از ابزارهای محبوب مارک‌داون آورده شده است:

1.  **MarkdownPad** (برای ویندوز): یک ویرایشگر مارک‌داون قدرتمند که امکانات ویژه‌ای مانند پیش‌نمایش زنده، پشتیبانی از افزونه‌های مختلف و سفارشی‌سازی ظاهر را ارائه می‌دهد.
    
2.  **Typora**: یک ویرایشگر مارک‌داون برای مک، ویندوز و لینوکس که با رابط کاربری بسیار ساده و پیش‌نمایش زنده، تجربه‌ای بدون حواس‌پرتی را فراهم می‌کند.
    
3.  **Dillinger**: یک ویرایشگر مارک‌داون تحت وب است که امکان ویرایش و ذخیره‌سازی مستقیم فایل‌ها در سرویس‌های ابری مانند GitHub و Dropbox را فراهم می‌کند.
    
4.  **Pandoc**: یک ابزار خط فرمان است که امکان تبدیل فایل‌های مارک‌داون به تقریباً هر فرمت دیگری را می‌دهد. این ابزار برای کاربران پیشرفته‌تر که نیاز به تبدیل اسناد بین فرمت‌های مختلف دارند، ایده‌آل است.
    
5.  **Markdown Here**: یک افزونه برای مرورگرها و برنامه‌های ایمیل مانند Gmail است که امکان نوشتن ایمیل با نشانه‌گذاری مارک‌داون و تبدیل آن به HTML را فراهم می‌کند.
    

هر یک از این ابزارها ویژگی‌ها و امکانات متفاوتی دارند که بسته به نیازهای شما ممکن است مفید باشند.

**در پایان**
------------

استفاده از Markdown می‌تواند زمان بسیاری را برای شما ذخیره کند. شاید در ابتدا کمی درگیری با آن داشته باشید اما با گذر زمان می‌توانید در استفاده از آن سریع‌تر عمل کنید. کلیدهای میانبر را نیز از یاد نبرید، برخی از ادیتورها از آن‌ها پشتیبانی می‌کنند. این موضوع را نیز در نظر بگیرید که هر زمان خواستید می‌توانید از HTML استفاده کنید. 
