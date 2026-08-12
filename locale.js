/* =========================================================
   Ughy Kinga · Nail Trainer — nyelvi réteg (HU / RO / EN)
   A magyar az alapérték: az eredeti HTML-tartalom.
   Csak a RO és EN fordítások szerepelnek a szótárban.
   Használat: data-i18n="kulcs" · data-i18n-ph="kulcs" (placeholder)
   ========================================================= */
(function () {
  'use strict';

  var T = {
    ro: {
      /* ---------- közös ---------- */
      'c.trust1': '✓ Plată securizată cu cardul',
      'c.trust2': '✓ Acces imediat',
      'c.trust3': '✓ Vizionare timp de 3 luni',
      'c.nav.home': 'Acasă',
      'c.nav.courses': 'Cursuri',
      'c.nav.gallery': 'Galerie',
      'c.nav.about': 'Despre mine',
      'c.nav.mine': 'Cursurile mele',
      'c.login': 'Autentificare',
      'c.ftr.about': 'Cursuri online de construcție unghii. Tehnică de salon pe video, pas cu pas — ca să lucrezi mai repede, mai precis și mai sigur pe tine.',
      'c.ftr.pages': 'Pagini',
      'c.ftr.courses': 'Cursuri',
      'c.ftr.contact': 'Contact',
      'c.ftr.msg': 'Scrie-mi un mesaj',
      'c.ftr.nl': 'Newsletter',
      'c.ftr.email': 'Adresă de e-mail',
      'c.ftr.nlok': 'Mulțumesc, te-ai abonat.',
      'c.ftr.nlerr': 'Nu a mers acum — încearcă din nou mai târziu.',
      'c.videolang': 'Videoclipurile sunt în limba maghiară',
      /* kurzusnevek */
      'c.n.crispy': 'Crispy gel lac',
      'c.n.short': 'Manichiură scurtă',
      /* metaadatok */
      'c.m.crispy': 'Un videoclip · 1 h 40 min',
      'c.m.slim': 'Un videoclip · 1 h 30 min',
      'c.m.baby': 'Un videoclip · 1 h 20 min',
      'c.m.tipp': 'Un videoclip · 1 h 25 min',
      'c.m.short': 'Un videoclip · 1 h 10 min',
      'c.d.slim': '1 h 30 min', 'c.d.tipp': '1 h 25 min', 'c.d.baby': '1 h 20 min', 'c.d.short': '1 h 10 min',
      'c.locked': 'Blocat',
      'c.own.days': 'Al tău · 74 zile',
      'c.have': 'Îl ai',
      'c.continue': 'Continui',
      'c.buy': 'Cumpăr',
      'c.view': 'Vezi detalii',

      /* ---------- kezdőlap ---------- */
      'h.pill': 'Curs online · acces imediat',
      'h.h1': 'Tehnica mea de salon,<br><em>filmată pas cu pas.</em>',
      'h.lead': 'După cumpărare poți viziona imediat, timp de 3 luni, de câte ori vrei. Fiecare pas de aproape, fără tăieturi — exact așa cum lucrez eu.',
      'h.cta1': 'Vezi cursurile',
      'h.cta2': 'Cum funcționează?',
      'h.s1': 'Tehnici',
      'h.s2v': '3 luni',
      'h.s2': 'Acces',
      'h.s3': 'Lucrări pe Instagram',
      'h.how.eyebrow': 'Cum funcționează',
      'h.how.h2': 'Trei pași și deja poți viziona.',
      'h.how.lead': 'Fără date fixe de curs, fără deplasare, fără listă de așteptare. Ce cumperi, e al tău imediat — în contul tău.',
      'h.st1.h': 'Alegi',
      'h.st1.p': 'Fiecare tehnică e un curs separat, cu preț separat. Poți cumpăra doar acela care îți lipsește — sau alegi două și e cu 15% mai ieftin.',
      'h.st2.h': 'Plătești cu cardul',
      'h.st2.p': 'Plată securizată, câteva clicuri. E-mailul de confirmare sosește imediat, nu trebuie să aștepți nimic.',
      'h.st3.h': 'E acolo când ai nevoie',
      'h.st3.p': 'Videoclipurile te așteaptă în fila „Cursurile mele". Timp de trei luni le poți deschide oricând — chiar și în timpul lucrului, de pe telefon, în salon.',
      'h.c.eyebrow': 'Cursuri',
      'h.c.h2': 'Cinci tehnici. Fiecare separat.',
      'h.c.lead': 'Lucrarea se vede complet și la cursurile blocate — <b style="color:var(--ink)">știi exact ce cumperi</b>. Cele cumpărate apar cu chenar verde și cu zilele rămase.',
      'h.c.all': 'Vezi toate cursurile →',
      'h.learn.eyebrow': 'Ce înveți la curs',
      'h.learn.h2': 'Nu detalii. Un flux de lucru complet.',
      'h.l1.h': 'Gel lac întărit', 'h.l1.p': 'Execuție durabilă și estetică',
      'h.l2.h': 'Geluri autonivelante', 'h.l2.p': 'Folosire corectă, fără pilire',
      'h.l3.h': 'Formă slim', 'h.l3.p': 'Conturare elegantă, subțire și precisă',
      'h.l4.h': 'Formă pătrată', 'h.l4.p': 'Umplere, ajustarea formei și tehnici de pilire',
      'h.l5.h': 'Trucuri și tehnici pro', 'h.l5.p': 'Muncă de salon mai rapidă și mai eficientă',
      'h.about.eyebrow': 'Cine te învață',
      'h.about.q': 'Nu predau trucuri, ci un sistem care funcționează și în salon.',
      'h.about.p': 'Nail trainer, formator în construcția unghiilor. Susțin cursuri personale și masterclass-uri — cursurile video oferă aceeași materie, doar că o vizionezi când îți convine și de câte ori ai nevoie.',
      'h.about.more': 'Mai multe despre mine →',
      'h.gal.eyebrow': 'Galerie',
      'h.gal.h2': 'Lucrări pe care le construim și la cursuri.',
      'h.gal.all': 'Galeria completă →',
      'h.faq.eyebrow': 'Întrebări frecvente',
      'h.faq.h2': 'Ce vrei să știi înainte de cumpărare.',
      'h.faq.q1': 'Cât timp pot viziona cursul cumpărat?',
      'h.faq.a1': 'Timp de <b>3 luni</b> de la cumpărare, de câte ori vrei. În fila „Cursurile mele" vezi mereu câte zile mai ai. După cele trei luni cursul se blochează la loc, iar dacă vrei să îl revezi, îl cumperi din nou.',
      'h.faq.q2': 'De ce am nevoie ca să pot viziona?',
      'h.faq.a2': 'De nimic special: telefon, tabletă sau calculator și internet. Nu trebuie să descarci nimic, nu ai nevoie de aplicație — te autentifici și pornește videoclipul.',
      'h.faq.q3': 'Are sens și ca începător?',
      'h.faq.a3': 'Are. Fiecare curs pornește de la început și merge până la lucrarea finită, fără să sar peste niciun pas — arăt și ceea ce majoritatea tratează superficial. Dacă nu ești sigură cu care să începi, scrie-mi o frază despre unde te afli și îți spun care te ajută cel mai repede.',
      'h.faq.q4': 'Există reducere dacă iau mai multe?',
      'h.faq.a4': 'Da. Dacă alegi <b>două cursuri</b> odată, cele două împreună sunt cu <b>15% mai ieftine</b> decât dacă le-ai cumpăra separat. Orice două se pot combina, iar accesul e de trei luni la amândouă.',
      'h.cta.eyebrow': 'Să începem',
      'h.cta.h2': 'Alege primul curs și diseară îl poți viziona.',
      'h.cta.lead': 'Se deschide imediat după plată. Fără așteptare, fără programare.',

      /* ---------- kurzusok ---------- */
      'k.eyebrow': 'Materiale educaționale online',
      'k.h1': 'Cursuri',
      'k.lead': 'Cinci tehnici, fiecare disponibilă separat — sau alegi două și e cu 15% mai ieftin. După cumpărare pornește imediat și timp de trei luni o revezi de câte ori vrei.',
      'k.demo': '<b>Machetă de prezentare.</b> Prețurile de aici sunt exemple, prețurile finale le stabilește Kinga. „Crispy gel lac" apare ca fiind cumpărat doar ca să pot arăta cum arată un curs care e deja al tău.',
      'k.tool1': '<b>5 cursuri</b> · Oricare două împreună cu 15% mai ieftin',
      'k.tool2': 'Sortare: <b>Recomandate</b>',
      'k.pack.eyebrow': 'Pachet de două',
      'k.pack.h2': 'Alege două și economisești 15%.',
      'k.pack.tag': 'Oricare 2 cursuri · −15%',
      'k.pack.title': 'Pachet de două',
      'k.pack.lead': 'Nu trebuie să le cumperi pe toate cinci. Alegi cele două tehnici de care chiar ai nevoie — împreună sunt cu 15% mai ieftine decât separat.',
      'k.pack.t1': 'Orice două cursuri se pot combina liber',
      'k.pack.t2': 'Acces de trei luni la amândouă',
      'k.pack.t3': 'Reducerea se scade automat în coș',
      'k.pack.eg': 'De exemplu: Slim tip + Tipp Nails',
      'k.pack.b1': 'Îmi compun pachetul',
      'k.pack.b2': 'Vezi cursurile',
      'k.acc1.h': 'Trei luni',
      'k.acc1.p': 'Fiecare curs cumpărat e disponibil trei luni. În fila „Cursurile mele" vezi mereu câte zile mai ai.',
      'k.acc2.h': 'Vizionări nelimitate',
      'k.acc2.p': 'În cele trei luni îl revezi de câte ori vrei — nu există limită de vizionări.',
      'k.acc3.h': 'Apoi din nou',
      'k.acc3.p': 'După expirare cursul se blochează la loc. Dacă mai târziu ai iar nevoie, pur și simplu îl cumperi din nou.',
      'k.cta.eyebrow': 'Nu știi cu care să începi?',
      'k.cta.h2': 'Scrie-mi și îți spun eu.',
      'k.cta.lead': 'Îmi descrii într-o frază unde te afli și ce ți se blochează în lucru — iar eu îți spun care curs te ajută cel mai repede.',
      'k.cta.btn': 'Am o întrebare',

      /* ---------- kurzus-oldal ---------- */
      'd.crumb': 'Cursuri',
      'd.b1': 'Un videoclip', 'd.b2': '1 h 30 min', 'd.b3': '3 luni acces', 'd.b4': 'În limba maghiară',
      'd.lead': 'Formă de unghie elegantă, subțire și precisă. Parcurg construcția completă, de la pregătire până la finisare — ca lucrarea ta pe tip să nu se îngroașe, să nu se rupă și după două săptămâni să arate ca în prima zi.',
      'd.preview': 'Previzualizare gratuită · 3 min',
      'd.les.eyebrow': 'Ce conține videoclipul',
      'd.les.h2': 'O oră și jumătate, împărțită pe capitole.',
      'd.les.note': 'Un singur videoclip continuu, fără tăieturi. După cumpărare poți sări liber între capitole și continui de unde ai rămas.',
      'd.l1.t': 'Pregătire și lucrul cu cuticula', 'd.l1.s': 'Ce tratează majoritatea superficial — deși aici se decide durabilitatea.',
      'd.l2.t': 'Alegerea și aplicarea tipsului', 'd.l2.s': 'Mărime, curbură, lipire — ca să nu se ridice.',
      'd.l3.t': 'Construcție cu gel, pe straturi', 'd.l3.s': 'Unde câtă material se pune și de ce exact acolo.',
      'd.l4.t': 'Pilirea formei slim', 'd.l4.s': 'Secretul formei subțiri, dar rezistente — pas cu pas.',
      'd.l5.t': 'Finisare și luciu', 'd.l5.s': 'Suprafață uniformă, fără bule, cu margini curate.',
      'd.l6.t': 'Umplere după patru săptămâni', 'd.l6.s': 'Ce faci cu unghia crescută, ca să nu reconstruiești.',
      'd.free': 'Gratuit',
      'd.who.eyebrow': 'Cui se adresează',
      'd.who.h2': 'E pentru tine, dacă…',
      'd.who.yes': 'Da, dacă',
      'd.y1': 'construiești deja unghii, dar formele îți ies mai groase decât ai vrea',
      'd.y2': 'lucrarea ta se rupe sau se ridică des',
      'd.y3': 'vrei să lucrezi mai repede la aceeași calitate',
      'd.y4': 'vrei să faci umplerea cu încredere și după patru săptămâni',
      'd.who.no': 'Nu e primul curs, dacă',
      'd.n1': 'acum iei pila în mână pentru prima dată — începe cu Manichiură scurtă',
      'd.n2': 'faci doar gel lac și nu construiești — Crispy gel lac e cursul tău',
      'd.buy.sub': 'Taxă unică · fără abonament',
      'd.buy.b2': 'Previzualizare gratuită',
      'd.f1': 'Format', 'd.f1v': 'Un videoclip',
      'd.f2': 'Durată totală', 'd.f2v': '1 h 30 min',
      'd.f3': 'În pachet', 'd.f3v': '−15%',
      'd.f4': 'Acces', 'd.f4v': '3 luni',
      'd.f5': 'Limbă', 'd.f5v': 'Maghiară',
      'd.f6': 'Dispozitiv', 'd.f6v': 'Telefon, tabletă, PC',
      'd.buy.note': 'După plată se deschide imediat în fila „Cursurile mele". Dacă alegi și un al doilea curs, amândouă sunt cu 15% mai ieftine.',
      'd.rel.eyebrow': 'Te-ar putea interesa',
      'd.rel.h2': 'Alte cursuri',
      'd.rel.all': 'Toate cursurile →',

      /* ---------- galéria ---------- */
      'g.eyebrow': 'Lucrările mele',
      'g.h1': 'Galerie',
      'g.lead': 'Lucrări proprii din salon — exact tehnicile pe care le construim pas cu pas la cursuri. Dă clic pe oricare pentru mărire.',
      'g.f.all': 'Toate',
      'g.cta.eyebrow': 'Poți face și tu asta',
      'g.cta.h2': 'Nu e o chestiune de talent. E o chestiune de tehnică.',
      'g.cta.lead': 'În spatele fiecărei lucrări de aici stau aceleași câteva mișcări — și exact pe acestea le predau la cursuri.',

      /* ---------- rólam ---------- */
      'r.eyebrow': 'Despre mine',
      'r.h1': 'Ughy Kinga<br><em>Nail Trainer</em>',
      'r.q': 'Nu predau trucuri, ci un sistem care funcționează și în salon.',
      'r.p1': 'Sunt formator în construcția unghiilor. Predau tehnica gelului, formele și tehnica de salon — atât live, cât și online.',
      'r.p2': 'La cursurile mele nu arăt o decorațiune spectaculoasă, ci fluxul complet de lucru: de la pregătire până la finisare, în aceeași ordine și în același ritm în care lucrez la o clientă reală. Asta face ca lucrarea ta să fie nu doar mai frumoasă, ci și <b style="color:var(--ink)">mai rapidă și mai previzibilă</b>.',
      'r.s1': 'Lucrări pe Instagram',
      'r.s2': 'Urmăritori',
      'r.s3': 'Cursuri online',
      'r.live.eyebrow': 'Și live',
      'r.live.h2': 'Cursuri personale și masterclass-uri',
      'r.live.p1': 'Pe lângă cursurile online susțin regulat și cursuri personale — cu grupe mici, ca să am timp pentru fiecare. Cel mai recent a fost <b style="color:var(--ink)">Masterclass de tehnică de salon</b>: o zi în care am parcurs toate trucurile muncii de salon.',
      'r.live.p2': 'Cursurile online oferă aceeași materie — doar că le vizionezi când îți convine și de câte ori ai nevoie.',
      'r.live.link': 'Mă interesează un curs live →',
      'r.ig.follow': 'Urmărește-mă →',
      'r.k.eyebrow': 'Contact',
      'r.k.h2': 'Ai o întrebare? Scrie-mi liniștită.',
      'r.k.p1': 'Dacă nu știi cu ce curs să începi, descrie-mi într-o frază unde te afli și ce ți se blochează în lucru — îți spun care te ajută cel mai repede.',
      'r.k.p2': 'Tot aici poți întreba și despre cursurile live.',
      'r.k.ig': 'Scrie-mi pe Instagram',
      'r.f.name': 'Numele tău', 'r.f.name.ph': 'Kovács Ana',
      'r.f.email': 'Adresă de e-mail', 'r.f.email.ph': 'ana@example.com',
      'r.f.subj': 'Cu ce te pot ajuta?',
      'r.o1': 'Cu ce curs să încep?',
      'r.o2': 'Am o întrebare despre un curs',
      'r.o3': 'Mă interesează un curs live',
      'r.o4': 'Problemă cu plata / accesul',
      'r.o5': 'Altceva',
      'r.f.msg': 'Mesaj', 'r.f.msg.ph': 'Scrie în câteva fraze unde te afli…',
      'r.f.gdpr': 'Sunt de acord ca datele mele să fie folosite de Ughy Kinga pentru a răspunde mesajului meu.',
      'r.f.send': 'Trimite mesajul',
      'r.f.ok': 'Mulțumesc, a ajuns! Îți răspund în curând pe e-mail.',
      'r.f.err': 'Mesajul nu a putut fi trimis acum. Încearcă din nou sau scrie-mi pe Instagram — mă găsești și acolo.',
      'r.demo': '<b>Machetă de prezentare.</b> Formularul se poate completa și dă un răspuns, dar încă nu trimite nicăieri — pentru asta e nevoie de o adresă de e-mail. Cifrele și citatul provin de pe profilul de Instagram și de pe afișul Kingăi; textul de prezentare îl va finaliza ea.',

      /* ---------- kurzusaim ---------- */
      'm.demo': '<b>Machetă de prezentare.</b> Această filă e accesibilă doar după autentificare și afișează doar videoclipurile cumpărate. Mai jos arăt ambele stări: <b>sus autentificat</b>, <b>jos neautentificat</b>.',
      'm.state.a': 'Autentificat · așa vede cumpărătorul',
      'm.state.b': 'Neautentificat · așa vede cine nu a cumpărat',
      'm.hi': 'Bună, Ana!',
      'm.hi.p': 'Ai 1 curs activ. Accesul e valabil 3 luni de la cumpărare.',
      'm.more': 'Alte cursuri',
      'm.cap': 'Partea 3 · Construcție pe straturi',
      'm.part': 'Partea 3 din 6 · 18:45',
      'm.days74': 'Disponibil încă 74 de zile',
      'm.watched': 'Vizionat',
      'm.nowplaying': 'Acum vizionezi',
      'm.l1': 'Pregătire', 'm.l2': 'Bază', 'm.l3': 'Construcție pe straturi',
      'm.l4': 'Ajustarea formei', 'm.l5': 'Finisare și luciu', 'm.l6': 'Umplere după patru săptămâni',
      'm.mine.eyebrow': 'Cursurile mele',
      'm.mine.h2': 'Ce ai cumpărat',
      'm.cont': 'Continui de la 38:10',
      'm.prog': '38% vizionat · au mai rămas 62 de minute',
      'm.exp': 'Expirat · 4 mai 2026',
      'm.rebuy': 'Cumpăr din nou · 390 lei',
      'm.expnote': 'Cele 3 luni au trecut',
      'm.rec.eyebrow': 'Recomandate',
      'm.rec.h2': 'La acestea încă nu ai acces',
      'm.pack.band': 'Pachet de două',
      'm.pack.h3': 'Alege două',
      'm.pack.meta': 'Oricare 2 cursuri împreună',
      'm.locked.h2': 'Această secțiune e vizibilă doar după autentificare.',
      'm.locked.p': 'Videoclipurile sunt disponibile exclusiv celor care au cumpărat cursul respectiv. Autentifică-te sau vezi cursurile.',
      'm.login.h3': 'Autentificare',
      'm.login.p': 'Introdu adresa de e-mail cu care ai cumpărat.',
      'm.login.e': 'Adresă de e-mail',
      'm.login.pw': 'Parolă',
      'm.login.btn': 'Intru în cont',
      'm.login.ok': 'Autentificare reușită — cursurile tale se încarcă.',
      'm.login.alt': 'Încă nu ai cont? <a href="kurzusok.html">Se creează automat la cumpărare.</a>'
    },

    en: {
      /* ---------- shared ---------- */
      'c.trust1': '✓ Secure card payment',
      'c.trust2': '✓ Instant access',
      'c.trust3': '✓ Rewatch for 3 months',
      'c.nav.home': 'Home',
      'c.nav.courses': 'Courses',
      'c.nav.gallery': 'Gallery',
      'c.nav.about': 'About',
      'c.nav.mine': 'My courses',
      'c.login': 'Log in',
      'c.ftr.about': 'Online nail-building courses. Salon technique on video, step by step — so you work faster, more precisely and with more confidence.',
      'c.ftr.pages': 'Pages',
      'c.ftr.courses': 'Courses',
      'c.ftr.contact': 'Contact',
      'c.ftr.msg': 'Send a message',
      'c.ftr.nl': 'Newsletter',
      'c.ftr.email': 'Email address',
      'c.ftr.nlok': 'Thank you, you’re subscribed.',
      'c.ftr.nlerr': 'That didn’t go through — please try again later.',
      'c.videolang': 'The videos are in Hungarian',
      'c.n.crispy': 'Crispy gel polish',
      'c.n.short': 'Short manicure',
      'c.m.crispy': 'One video · 1 h 40 min',
      'c.m.slim': 'One video · 1 h 30 min',
      'c.m.baby': 'One video · 1 h 20 min',
      'c.m.tipp': 'One video · 1 h 25 min',
      'c.m.short': 'One video · 1 h 10 min',
      'c.d.slim': '1 h 30 min', 'c.d.tipp': '1 h 25 min', 'c.d.baby': '1 h 20 min', 'c.d.short': '1 h 10 min',
      'c.locked': 'Locked',
      'c.own.days': 'Yours · 74 days',
      'c.have': 'Owned',
      'c.continue': 'Continue',
      'c.buy': 'Buy',
      'c.view': 'View',

      /* ---------- home ---------- */
      'h.pill': 'Online course · instant access',
      'h.h1': 'My salon technique,<br><em>filmed step by step.</em>',
      'h.lead': 'Watch it the moment you buy, for 3 months, as many times as you like. Every step up close, uncut — exactly the way I work.',
      'h.cta1': 'See the courses',
      'h.cta2': 'How does it work?',
      'h.s1': 'Techniques',
      'h.s2v': '3 months',
      'h.s2': 'Access',
      'h.s3': 'Works on Instagram',
      'h.how.eyebrow': 'How it works',
      'h.how.h2': 'Three steps and you can start watching.',
      'h.how.lead': 'No course dates, no travelling, no waiting list. What you buy is yours immediately — in your own account.',
      'h.st1.h': 'You choose',
      'h.st1.p': 'Every technique is a separate course at its own price. Buy just the one you are missing — or pick two and it is 15% cheaper.',
      'h.st2.h': 'You pay by card',
      'h.st2.p': 'Secure payment, a few clicks. The confirmation email arrives instantly, there is nothing to wait for.',
      'h.st3.h': 'There when you need it',
      'h.st3.p': 'The videos are waiting under “My courses”. For three months you can open them any time — even mid-job, from your phone, in the salon.',
      'h.c.eyebrow': 'Courses',
      'h.c.h2': 'Five techniques. Sold separately.',
      'h.c.lead': 'The work stays fully visible even on locked courses — <b style="color:var(--ink)">you know exactly what you are buying</b>. Purchased ones show a green frame and the days you have left.',
      'h.c.all': 'See all courses →',
      'h.learn.eyebrow': 'What you will learn',
      'h.learn.h2': 'Not details. A complete workflow.',
      'h.l1.h': 'Reinforced gel polish', 'h.l1.p': 'Durable, clean execution',
      'h.l2.h': 'Self-levelling gels', 'h.l2.p': 'Used correctly, with no filing',
      'h.l3.h': 'Slim nail shape', 'h.l3.p': 'Elegant, thin and precise shaping',
      'h.l4.h': 'Square shape', 'h.l4.p': 'Infills, reshaping and filing technique',
      'h.l5.h': 'Pro tricks & techniques', 'h.l5.p': 'Faster, more efficient salon work',
      'h.about.eyebrow': 'Who teaches',
      'h.about.q': 'I don’t hand over tricks, I hand over a system that also works in the salon.',
      'h.about.p': 'Nail trainer and nail-building educator. I run in-person trainings and masterclasses — the video courses cover the same material, you just watch it whenever it suits you, as many times as you need.',
      'h.about.more': 'More about me →',
      'h.gal.eyebrow': 'Gallery',
      'h.gal.h2': 'Work we build together on the courses.',
      'h.gal.all': 'Full gallery →',
      'h.faq.eyebrow': 'Frequently asked',
      'h.faq.h2': 'What you want to know before buying.',
      'h.faq.q1': 'How long can I watch a course I bought?',
      'h.faq.a1': 'For <b>3 months</b> from purchase, without a viewing limit. Under “My courses” you always see how many days you have left. After the three months the course locks again, and if you want to rewatch it you buy it again.',
      'h.faq.q2': 'What do I need to watch it?',
      'h.faq.a2': 'Nothing special: a phone, tablet or computer and an internet connection. Nothing to download, no app needed — you log in and the video starts.',
      'h.faq.q3': 'Is it worth it as a beginner?',
      'h.faq.a3': 'It is. Every course runs from the very start to the finished work and I skip nothing — including the parts most people rush. If you are unsure which to start with, write me a sentence about where you are and I will tell you which one helps fastest.',
      'h.faq.q4': 'Is there a discount for buying more?',
      'h.faq.a4': 'Yes. If you pick <b>two courses</b> at once, the pair is <b>15% cheaper</b> than buying them separately. Any two can be combined, and both come with three months of access.',
      'h.cta.eyebrow': 'Let’s begin',
      'h.cta.h2': 'Pick your first one and watch it tonight.',
      'h.cta.lead': 'It opens right after payment. No waiting, no scheduling.',

      /* ---------- courses ---------- */
      'k.eyebrow': 'Online training material',
      'k.h1': 'Courses',
      'k.lead': 'Five techniques, each available on its own — or pick two and it is 15% cheaper. It starts the moment you buy, and for three months you rewatch it as often as you like.',
      'k.demo': '<b>Design mock-up.</b> The prices shown here are samples; Kinga will set the final ones. “Crispy gel polish” appears as purchased only so I can show what an owned course looks like.',
      'k.tool1': '<b>5 courses</b> · Any two together 15% cheaper',
      'k.tool2': 'Sort by: <b>Recommended</b>',
      'k.pack.eyebrow': 'Pair bundle',
      'k.pack.h2': 'Pick two and save 15%.',
      'k.pack.tag': 'Any 2 courses · −15%',
      'k.pack.title': 'Pair bundle',
      'k.pack.lead': 'You don’t have to buy all five. You choose the two techniques you actually need — together they cost 15% less than separately.',
      'k.pack.t1': 'Any two courses can be freely combined',
      'k.pack.t2': 'Three months of access to both',
      'k.pack.t3': 'The discount is applied automatically at checkout',
      'k.pack.eg': 'For example: Slim tip + Tipp Nails',
      'k.pack.b1': 'Build my pair',
      'k.pack.b2': 'See the courses',
      'k.acc1.h': 'Three months',
      'k.acc1.p': 'Every purchased course stays available for three months. Under “My courses” you always see the days remaining.',
      'k.acc2.h': 'Unlimited rewatching',
      'k.acc2.p': 'During those three months you rewatch as often as you like — there is no view limit.',
      'k.acc3.h': 'Then again',
      'k.acc3.p': 'After it expires the course locks again. If you need it later, you simply buy it again.',
      'k.cta.eyebrow': 'Not sure where to start?',
      'k.cta.h2': 'Write to me and I’ll tell you.',
      'k.cta.lead': 'Describe in one sentence where you are and what keeps going wrong — and I’ll tell you which course fixes it fastest.',
      'k.cta.btn': 'I have a question',

      /* ---------- course page ---------- */
      'd.crumb': 'Courses',
      'd.b1': 'One video', 'd.b2': '1 h 30 min', 'd.b3': '3 months access', 'd.b4': 'In Hungarian',
      'd.lead': 'An elegant, thin and precise nail shape. I go through the whole build from prep to top coat — so your tip work doesn’t thicken, doesn’t break, and still looks like day one two weeks later.',
      'd.preview': 'Free preview · 3 min',
      'd.les.eyebrow': 'What’s in the video',
      'd.les.h2': 'An hour and a half, split into chapters.',
      'd.les.note': 'One continuous video, uncut. After purchase you can jump freely between chapters and pick up where you left off.',
      'd.l1.t': 'Prep and cuticle work', 'd.l1.s': 'What most people rush — even though durability is decided here.',
      'd.l2.t': 'Choosing and fitting the tip', 'd.l2.s': 'Size, curve, bonding — so it doesn’t lift.',
      'd.l3.t': 'Gel build, layer by layer', 'd.l3.s': 'How much product goes where, and why exactly there.',
      'd.l4.t': 'Filing the slim shape', 'd.l4.s': 'The secret of a thin yet strong shape — step by step.',
      'd.l5.t': 'Top coat and shine', 'd.l5.s': 'An even, bubble-free surface with clean edges.',
      'd.l6.t': 'Infill after four weeks', 'd.l6.s': 'What to do with the grown-out nail so you don’t rebuild it.',
      'd.free': 'Free',
      'd.who.eyebrow': 'Who it’s for',
      'd.who.h2': 'It’s for you if…',
      'd.who.yes': 'Yes, if',
      'd.y1': 'you already build nails but your shapes come out thicker than you’d like',
      'd.y2': 'your work often breaks or lifts',
      'd.y3': 'you want to work faster at the same quality',
      'd.y4': 'you want to do infills confidently after four weeks',
      'd.who.no': 'Not your first course if',
      'd.n1': 'you’re picking up a file for the first time — start with Short manicure',
      'd.n2': 'you only do gel polish and don’t build — Crispy gel polish is yours',
      'd.buy.sub': 'One-off payment · no subscription',
      'd.buy.b2': 'Free preview',
      'd.f1': 'Format', 'd.f1v': 'One video',
      'd.f2': 'Total length', 'd.f2v': '1 h 30 min',
      'd.f3': 'In a pair', 'd.f3v': '−15%',
      'd.f4': 'Access', 'd.f4v': '3 months',
      'd.f5': 'Language', 'd.f5v': 'Hungarian',
      'd.f6': 'Device', 'd.f6v': 'Phone, tablet, PC',
      'd.buy.note': 'It opens under “My courses” right after payment. If you add a second course, both are 15% cheaper.',
      'd.rel.eyebrow': 'You may also like',
      'd.rel.h2': 'More courses',
      'd.rel.all': 'All courses →',

      /* ---------- gallery ---------- */
      'g.eyebrow': 'My work',
      'g.h1': 'Gallery',
      'g.lead': 'Real work from the salon — exactly the techniques we build step by step on the courses. Click any image to enlarge.',
      'g.f.all': 'All',
      'g.cta.eyebrow': 'You can do this too',
      'g.cta.h2': 'It isn’t talent. It’s technique.',
      'g.cta.lead': 'Behind every piece here are the same few moves — and those are exactly what I teach on the courses.',

      /* ---------- about ---------- */
      'r.eyebrow': 'About me',
      'r.h1': 'Ughy Kinga<br><em>Nail Trainer</em>',
      'r.q': 'I don’t hand over tricks, I hand over a system that also works in the salon.',
      'r.p1': 'I’m a nail-building educator. I teach gel technique, shapes and salon technique — both in person and online.',
      'r.p2': 'On my courses I don’t show one flashy design; I show the whole workflow: from prep to top coat, in the same order and at the same pace I work on a real client. That’s what makes your work not only nicer, but also <b style="color:var(--ink)">faster and more predictable</b>.',
      'r.s1': 'Works on Instagram',
      'r.s2': 'Followers',
      'r.s3': 'Online courses',
      'r.live.eyebrow': 'In person too',
      'r.live.h2': 'One-to-one trainings and masterclasses',
      'r.live.p1': 'Alongside the online courses I regularly run in-person trainings — in small groups so everyone gets time. The most recent was the <b style="color:var(--ink)">Salon Technique Masterclass</b>: one day covering every trick of salon work.',
      'r.live.p2': 'The online courses cover the same material — you just watch when it suits you, as many times as you need.',
      'r.live.link': 'I’m interested in a live training →',
      'r.ig.follow': 'Follow me →',
      'r.k.eyebrow': 'Contact',
      'r.k.h2': 'Got a question? Just write.',
      'r.k.p1': 'If you don’t know which course to start with, describe in one sentence where you are and what keeps going wrong — I’ll tell you which one helps fastest.',
      'r.k.p2': 'You can also ask about in-person trainings here.',
      'r.k.ig': 'Message me on Instagram',
      'r.f.name': 'Your name', 'r.f.name.ph': 'Anna Smith',
      'r.f.email': 'Email address', 'r.f.email.ph': 'anna@example.com',
      'r.f.subj': 'How can I help?',
      'r.o1': 'Which course should I start with?',
      'r.o2': 'I have a question about a course',
      'r.o3': 'I’m interested in a live training',
      'r.o4': 'Payment / access problem',
      'r.o5': 'Something else',
      'r.f.msg': 'Message', 'r.f.msg.ph': 'Describe in a few sentences where you are…',
      'r.f.gdpr': 'I agree that Ughy Kinga may use my details to answer my enquiry.',
      'r.f.send': 'Send message',
      'r.f.ok': 'Thank you, it arrived! I’ll reply by email soon.',
      'r.f.err': 'The message couldn’t be sent right now. Please try again, or write to me on Instagram — I’m there too.',
      'r.demo': '<b>Design mock-up.</b> The form can be filled in and responds, but it doesn’t send anywhere yet — that needs an email address. The numbers and the quote come from Kinga’s own Instagram profile and poster; she will finalise the personal introduction.',

      /* ---------- my courses ---------- */
      'm.demo': '<b>Design mock-up.</b> This tab is only reachable after logging in, and it only shows purchased videos. Below I show both states: <b>logged in at the top</b>, <b>logged out at the bottom</b>.',
      'm.state.a': 'Logged in · what the buyer sees',
      'm.state.b': 'Logged out · what a non-buyer sees',
      'm.hi': 'Hi, Anna!',
      'm.hi.p': 'You have 1 active course. Access lasts 3 months from purchase.',
      'm.more': 'More courses',
      'm.cap': 'Part 3 · Layer build',
      'm.part': 'Part 3 of 6 · 18:45',
      'm.days74': 'Available for 74 more days',
      'm.watched': 'Watched',
      'm.nowplaying': 'Now playing',
      'm.l1': 'Prep', 'm.l2': 'Base', 'm.l3': 'Layer build',
      'm.l4': 'Reshaping', 'm.l5': 'Top coat and shine', 'm.l6': 'Infill after four weeks',
      'm.mine.eyebrow': 'My courses',
      'm.mine.h2': 'What you have bought',
      'm.cont': 'Continue from 38:10',
      'm.prog': '38% watched · 62 minutes left',
      'm.exp': 'Expired · 4 May 2026',
      'm.rebuy': 'Buy again · 390 lei',
      'm.expnote': 'The 3 months are up',
      'm.rec.eyebrow': 'Recommended',
      'm.rec.h2': 'You don’t have access to these yet',
      'm.pack.band': 'Pair bundle',
      'm.pack.h3': 'Pick two',
      'm.pack.meta': 'Any 2 courses together',
      'm.locked.h2': 'This section is only visible after logging in.',
      'm.locked.p': 'The videos are available exclusively to those who bought the given course. Log in, or take a look at the courses.',
      'm.login.h3': 'Log in',
      'm.login.p': 'Enter the email address you bought with.',
      'm.login.e': 'Email address',
      'm.login.pw': 'Password',
      'm.login.btn': 'Log in',
      'm.login.ok': 'Signed in — loading your courses.',
      'm.login.alt': 'No account yet? <a href="kurzusok.html">One is created automatically at checkout.</a>'
    }
  };

  var LANGS = ['hu', 'ro', 'en'];
  var KEY = 'uk_lang';

  function stash(el, attr) {
    var slot = '_hu_' + (attr || 'html');
    if (el[slot] === undefined) {
      el[slot] = attr ? (el.getAttribute(attr) || '') : el.innerHTML;
    }
    return el[slot];
  }

  function apply(lang) {
    var dict = T[lang] || null;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var hu = stash(el);
      el.innerHTML = (dict && dict[k] !== undefined) ? dict[k] : hu;
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      var hu = stash(el, 'placeholder');
      el.setAttribute('placeholder', (dict && dict[k] !== undefined) ? dict[k] : hu);
    });

    document.documentElement.setAttribute('lang', lang);

    var idx = LANGS.indexOf(lang);
    document.querySelectorAll('.lang').forEach(function (box) {
      box.style.setProperty('--li', idx < 0 ? 0 : idx);
      box.querySelectorAll('button').forEach(function (b) {
        b.classList.toggle('on', b.getAttribute('data-lang') === lang);
      });
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  /* váltás-animáció: pirula-pop + fény-áthúzás + smaragd villanás a lap tetején */
  var flash = null;
  function animate() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.lang').forEach(function (box) {
      box.classList.remove('swap');
      void box.offsetWidth;
      box.classList.add('swap');
      setTimeout(function () { box.classList.remove('swap'); }, 700);
    });
    if (!flash) {
      flash = document.createElement('div');
      flash.className = 'lang-flash';
      document.body.appendChild(flash);
    }
    flash.classList.remove('go');
    void flash.offsetWidth;
    flash.classList.add('go');
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (LANGS.indexOf(saved) === -1) saved = 'hu';

    document.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () {
        var next = b.getAttribute('data-lang');
        if (next === document.documentElement.getAttribute('lang')) return;
        apply(next);
        animate();
      });
    });

    apply(saved); // első betöltéskor animáció nélkül
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
