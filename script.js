const translations = {
    en: {
        app_title: "SocialDetective",
        platform_subtitle: "Select the platform you want to analyze.",
        enter_username_title: "Enter Profile",
        enter_username_subtitle: "Enter the exact username to start the process.",
        username_placeholder: "username",
        start_btn: "Continue",
        back_btn: "Back",
        status_resolving: "Resolving user profile...",
        status_analyzing: "Analyzing interactions...",
        status_fetching: "Fetching hidden data...",
        status_delayed: "Due to server load, this process may take a few minutes.",
        queue_label: "Queue Position",
        time_label: "Est. Time",
        tip: "TIP",
        ad_prompt: "Want to finish faster? Watch a quick ad to jump <strong>3 spots</strong> forward in the queue!",
        ad_btn: "Watch Ad (Jump 3 Spots)",
        ad_success: "Ad verified! You jumped 3 spots.",
        do_not_close: "Do not close or refresh this page, the connection may be lost.",
        error_title: "Profile is Private",
        error_desc: "We could not retrieve the target's messages or hidden interactions because they have strict privacy settings enabled.",
        error_tip: "Only mutual followers can bypass this security layer.",
        retry_btn: "Try Another Profile",
        modal_title: "Sponsor Message",
        modal_desc: "Click the ad below to verify and jump the queue.",
        modal_ad_text: "SPONSOR AD<br><small>Click Here</small>",
        modal_wait: "You can close in",
        modal_seconds: "seconds...",
        modal_error: "You must click the ad to receive your reward!",
        modal_verifying: "Verifying click...",
        support_title: "100% Free Service!",
        support_desc1: "We never charge you a single penny for this service.",
        support_desc2: "However, running these deep-scan servers costs us thousands of dollars every month. To keep this project alive and free, we kindly ask you to support us by viewing and clicking on the sponsor ads you encounter.",
        support_desc3: "Your support means everything to us. ❤️",
        support_btn: "I Understand & Support",
        adblock_title: "AdBlock Detected!",
        adblock_desc: "We rely on ad revenue to keep our servers running and this service 100% free. Please disable your AdBlocker to continue using the system.",
        adblock_btn: "I Disabled It, Reload Page",
        err_empty: "Please enter a profile to continue.",
        err_facebook: "Please enter a valid Facebook profile URL (e.g. facebook.com/username).",
        err_ig_format: "Invalid Instagram username. Use only letters, numbers, periods, and underscores.",
        err_ig_numeric: "Instagram usernames cannot be numbers only.",
        err_tiktok: "Invalid TikTok username. Length 2-24, cannot end with a period.",
        err_snapchat: "Invalid Snapchat username. Must be 3-15 chars and start with a letter.",
        err_twitter: "Invalid X/Twitter username. Must be 4-15 characters long."
    },
    tr: {
        app_title: "SosyalDedektif",
        platform_subtitle: "Analiz etmek istediğiniz platformu seçin.",
        enter_username_title: "Profili Girin",
        enter_username_subtitle: "İşlemi başlatmak için kullanıcı adını doğru girin.",
        username_placeholder: "kullaniciadi",
        start_btn: "Devam Et",
        back_btn: "Geri",
        status_resolving: "Kullanıcı profili çözülüyor...",
        status_analyzing: "Etkileşimler analiz ediliyor...",
        status_fetching: "Gizli veriler çekiliyor...",
        status_delayed: "Sunucu yoğunluğundan dolayı bu işlem birkaç dakika sürebilir.",
        queue_label: "Kuyruk Sırası",
        time_label: "Tahmini Süre",
        tip: "İPUCU",
        ad_prompt: "Daha hızlı bitmesini ister misin? Kısa bir reklam izleyerek sırada <strong>3 kişi</strong> öne atla!",
        ad_btn: "Reklam İzle (3 Sıra Atla)",
        ad_success: "Reklam onaylandı! 3 sıra öne geçtiniz.",
        do_not_close: "Bu ekranı kapatmayın veya sayfayı yenilemeyin, bağlantı kesilebilir.",
        error_title: "Profil Gizli",
        error_desc: "Hedef kişinin gizlilik ayarları çok sıkı olduğu için mesajları veya gizli etkileşimleri çekemedik.",
        error_tip: "Bu güvenlik katmanını yalnızca karşılıklı takipleşenler aşabilir.",
        retry_btn: "Başka Profil Dene",
        modal_title: "Sponsor Mesajı",
        modal_desc: "Ödülü almak için aşağıdaki reklama tıklayın.",
        modal_ad_text: "SPONSOR REKLAMI<br><small>Buraya Tıklayın</small>",
        modal_wait: "Kapatmak için",
        modal_seconds: "saniye...",
        modal_error: "Ödül almak için reklama tıklamalısınız!",
        modal_verifying: "Tıklama doğrulanıyor...",
        support_title: "Tamamen Ücretsiz Hizmet!",
        support_desc1: "Sizden bu hizmet için tek bir kuruş bile talep etmiyoruz.",
        support_desc2: "Ancak, bu derin tarama sunucularını çalıştırmak bize her ay binlerce dolara mal oluyor. Bu projeyi hayatta tutabilmek ve ücretsiz kalmasını sağlamak için, karşınıza çıkan sponsor reklamlara tıklayarak bize destek olmanızı rica ediyoruz.",
        support_desc3: "Desteğiniz bizim için her şey demek. ❤️",
        support_btn: "Anlıyorum ve Destekliyorum",
        adblock_title: "AdBlock Tespit Edildi!",
        adblock_desc: "Sunucularımızı ayakta tutmak ve bu hizmeti tamamen ücretsiz sunabilmek için reklam gelirlerine ihtiyacımız var. Sistemi kullanmaya devam etmek için lütfen Reklam Engelleyicinizi kapatın.",
        adblock_btn: "Kapattım, Sayfayı Yenile",
        err_empty: "Devam etmek için lütfen bir profil girin.",
        err_facebook: "Lütfen geçerli bir Facebook profil URL'si girin (örn. facebook.com/kullaniciadi).",
        err_ig_format: "Geçersiz Instagram kullanıcı adı. Sadece harf, rakam, nokta ve alt çizgi kullanın.",
        err_ig_numeric: "Instagram kullanıcı adları sadece rakamlardan oluşamaz.",
        err_tiktok: "Geçersiz TikTok kullanıcı adı. 2-24 karakter uzunluğunda olmalı ve nokta ile bitemez.",
        err_snapchat: "Geçersiz Snapchat kullanıcı adı. 3-15 karakter olmalı ve harfle başlamalıdır.",
        err_twitter: "Geçersiz X/Twitter kullanıcı adı. 4-15 karakter uzunluğunda olmalıdır."
    },
    es: {
        app_title: "DetectiveSocial",
        platform_subtitle: "Selecciona la plataforma que deseas analizar.",
        enter_username_title: "Ingresar Perfil",
        enter_username_subtitle: "Ingresa el nombre de usuario exacto para iniciar.",
        username_placeholder: "usuario",
        start_btn: "Continuar",
        back_btn: "Atrás",
        status_resolving: "Resolviendo perfil de usuario...",
        status_analyzing: "Analizando interacciones...",
        status_fetching: "Obteniendo datos ocultos...",
        status_delayed: "Debido a la carga del servidor, este proceso puede tardar unos minutos.",
        queue_label: "Posición en Cola",
        time_label: "Tiempo Est.",
        tip: "CONSEJO",
        ad_prompt: "¿Quieres terminar más rápido? ¡Mira un anuncio para avanzar <strong>3 lugares</strong> en la cola!",
        ad_btn: "Ver Anuncio (Avanzar 3)",
        ad_success: "¡Anuncio verificado! Avanzaste 3 lugares.",
        do_not_close: "No cierre ni actualice esta página, la conexión podría perderse.",
        error_title: "El perfil es Privado",
        error_desc: "No pudimos recuperar los mensajes del objetivo debido a sus estrictas configuraciones de privacidad.",
        error_tip: "Solo los seguidores mutuos pueden saltar esta capa de seguridad.",
        retry_btn: "Probar Otro Perfil",
        modal_title: "Mensaje Patrocinado",
        modal_desc: "Haz clic en el anuncio de abajo para verificar y avanzar en la cola.",
        modal_ad_text: "ANUNCIO PATROCINADO<br><small>Haz clic aquí</small>",
        modal_wait: "Puedes cerrar en",
        modal_seconds: "segundos...",
        modal_error: "¡Debes hacer clic en el anuncio para recibir tu recompensa!",
        modal_verifying: "Verificando clic...",
        support_title: "¡Servicio 100% Gratuito!",
        support_desc1: "Nunca te cobramos ni un solo centavo por este servicio.",
        support_desc2: "Sin embargo, ejecutar estos servidores nos cuesta miles de dólares cada mes. Para mantener este proyecto vivo y gratuito, te pedimos amablemente que nos apoyes viendo y haciendo clic en los anuncios patrocinados.",
        support_desc3: "Tu apoyo lo es todo para nosotros. ❤️",
        support_btn: "Entiendo y Apoyo",
        adblock_title: "¡AdBlock Detectado!",
        adblock_desc: "Dependemos de los ingresos publicitarios para mantener nuestros servidores y este servicio 100% gratuito. Desactiva tu bloqueador de anuncios para continuar.",
        adblock_btn: "Lo Desactivé, Recargar Página",
        err_empty: "Por favor, introduzca un perfil para continuar.",
        err_facebook: "Por favor, introduzca una URL válida de perfil de Facebook (ej. facebook.com/usuario).",
        err_ig_format: "Nombre de usuario de Instagram no válido. Use solo letras, números, puntos y guiones bajos.",
        err_ig_numeric: "Los nombres de usuario de Instagram no pueden ser solo números.",
        err_tiktok: "Nombre de usuario de TikTok no válido. Longitud 2-24, no puede terminar con un punto.",
        err_snapchat: "Nombre de usuario de Snapchat no válido. Debe tener entre 3 y 15 caracteres y empezar con una letra.",
        err_twitter: "Nombre de usuario de X/Twitter no válido. Debe tener entre 4 y 15 caracteres."
    },
    de: {
        app_title: "SocialDetective",
        platform_subtitle: "Wählen Sie die Plattform aus, die Sie analysieren möchten.",
        enter_username_title: "Profil Eingeben",
        enter_username_subtitle: "Geben Sie den genauen Benutzernamen ein, um zu starten.",
        username_placeholder: "benutzername",
        start_btn: "Weiter",
        back_btn: "Zurück",
        status_resolving: "Benutzerprofil wird aufgelöst...",
        status_analyzing: "Interaktionen werden analysiert...",
        status_fetching: "Versteckte Daten werden abgerufen...",
        status_delayed: "Aufgrund der Serverauslastung kann dieser Vorgang einige Minuten dauern.",
        queue_label: "Warteschlangenplatz",
        time_label: "Geschätzte Zeit",
        tip: "TIPP",
        ad_prompt: "Möchten Sie schneller fertig sein? Sehen Sie sich eine Werbung an, um <strong>3 Plätze</strong> vorzurücken!",
        ad_btn: "Werbung ansehen (3 Plätze vor)",
        ad_success: "Werbung bestätigt! 3 Plätze vorgerückt.",
        do_not_close: "Schließen oder aktualisieren Sie diese Seite nicht, die Verbindung könnte unterbrochen werden.",
        error_title: "Profil ist Privat",
        error_desc: "Wir konnten die versteckten Interaktionen nicht abrufen, da strenge Datenschutzeinstellungen aktiviert sind.",
        error_tip: "Nur gegenseitige Follower können diese Sicherheitsschicht umgehen.",
        retry_btn: "Anderes Profil versuchen",
        modal_title: "Sponsorenmitteilung",
        modal_desc: "Klicken Sie auf die Anzeige unten, um sich zu verifizieren und in der Warteschlange vorzurücken.",
        modal_ad_text: "SPONSORENANZEIGE<br><small>Hier klicken</small>",
        modal_wait: "Sie können schließen in",
        modal_seconds: "Sekunden...",
        modal_error: "Sie müssen auf die Anzeige klicken, um Ihre Belohnung zu erhalten!",
        modal_verifying: "Klick wird verifiziert...",
        support_title: "100% Kostenloser Service!",
        support_desc1: "Wir berechnen Ihnen keinen einzigen Cent für diesen Service.",
        support_desc2: "Der Betrieb dieser Server kostet uns jedoch jeden Monat Tausende von Dollar. Um dieses Projekt am Leben und kostenlos zu halten, bitten wir Sie, uns zu unterstützen, indem Sie auf die gesponserten Anzeigen klicken.",
        support_desc3: "Ihre Unterstützung bedeutet uns alles. ❤️",
        support_btn: "Ich verstehe und unterstütze",
        adblock_title: "AdBlock Erkannt!",
        adblock_desc: "Wir sind auf Werbeeinnahmen angewiesen, um unsere Server und diesen Service 100% kostenlos zu halten. Bitte deaktivieren Sie Ihren AdBlocker, um fortzufahren.",
        adblock_btn: "Ich habe ihn deaktiviert, Seite neu laden",
        err_empty: "Bitte geben Sie ein Profil ein, um fortzufahren.",
        err_facebook: "Bitte geben Sie eine gültige Facebook-Profil-URL ein (z. B. facebook.com/benutzername).",
        err_ig_format: "Ungültiger Instagram-Benutzername. Verwenden Sie nur Buchstaben, Zahlen, Punkte und Unterstriche.",
        err_ig_numeric: "Instagram-Benutzernamen dürfen nicht nur aus Zahlen bestehen.",
        err_tiktok: "Ungültiger TikTok-Benutzername. Länge 2-24, darf nicht auf einen Punkt enden.",
        err_snapchat: "Ungültiger Snapchat-Benutzername. Muss 3-15 Zeichen lang sein und mit einem Buchstaben beginnen.",
        err_twitter: "Ungültiger X/Twitter-Benutzername. Muss 4-15 Zeichen lang sein."
    },
    fr: {
        app_title: "DétectiveSocial",
        platform_subtitle: "Sélectionnez la plateforme que vous souhaitez analyser.",
        enter_username_title: "Entrer le Profil",
        enter_username_subtitle: "Entrez le nom d'utilisateur exact pour commencer.",
        username_placeholder: "nom d'utilisateur",
        start_btn: "Continuer",
        back_btn: "Retour",
        status_resolving: "Résolution du profil utilisateur...",
        status_analyzing: "Analyse des interactions...",
        status_fetching: "Récupération des données masquées...",
        status_delayed: "En raison de la charge du serveur, ce processus peut prendre quelques minutes.",
        queue_label: "Position dans la File",
        time_label: "Temps Est.",
        tip: "ASTUCE",
        ad_prompt: "Vous voulez finir plus vite ? Regardez une pub pour avancer de <strong>3 places</strong> dans la file !",
        ad_btn: "Voir la Pub (Avancer de 3)",
        ad_success: "Pub vérifiée ! Vous avez avancé de 3 places.",
        do_not_close: "Ne fermez pas et n'actualisez pas cette page, la connexion pourrait être perdue.",
        error_title: "Le profil est Privé",
        error_desc: "Nous n'avons pas pu récupérer les messages en raison de paramètres de confidentialité stricts.",
        error_tip: "Seuls les abonnés mutuels peuvent contourner cette couche de sécurité.",
        retry_btn: "Essayer un Autre Profil",
        modal_title: "Message Sponsorisé",
        modal_desc: "Cliquez sur la publicité ci-dessous pour vérifier et avancer dans la file.",
        modal_ad_text: "ANNONCE SPONSORISÉE<br><small>Cliquez ici</small>",
        modal_wait: "Vous pouvez fermer dans",
        modal_seconds: "secondes...",
        modal_error: "Vous devez cliquer sur l'annonce pour recevoir votre récompense !",
        modal_verifying: "Vérification du clic...",
        support_title: "Service 100% Gratuit !",
        support_desc1: "Nous ne vous facturons jamais un seul centime pour ce service.",
        support_desc2: "Cependant, faire tourner ces serveurs nous coûte des milliers de dollars chaque mois. Pour garder ce projet vivant et gratuit, nous vous demandons de nous soutenir en cliquant sur les annonces sponsorisées.",
        support_desc3: "Votre soutien représente tout pour nous. ❤️",
        support_btn: "Je Comprends et Je Soutiens",
        adblock_title: "AdBlock Détecté !",
        adblock_desc: "Nous comptons sur les revenus publicitaires pour faire tourner nos serveurs et garder ce service 100% gratuit. Veuillez désactiver votre bloqueur de publicités pour continuer.",
        adblock_btn: "Je l'ai Désactivé, Recharger la Page",
        err_empty: "Veuillez entrer un profil pour continuer.",
        err_facebook: "Veuillez entrer une URL de profil Facebook valide (ex. facebook.com/nomdutilisateur).",
        err_ig_format: "Nom d'utilisateur Instagram invalide. Utilisez uniquement des lettres, chiffres, points et tirets du bas.",
        err_ig_numeric: "Les noms d'utilisateur Instagram ne peuvent pas être uniquement des chiffres.",
        err_tiktok: "Nom d'utilisateur TikTok invalide. Longueur 2-24, ne peut pas se terminer par un point.",
        err_snapchat: "Nom d'utilisateur Snapchat invalide. Doit comporter de 3 à 15 caractères et commencer par une lettre.",
        err_twitter: "Nom d'utilisateur X/Twitter invalide. Doit comporter de 4 à 15 caractères."
    },
    ru: {
        app_title: "СоциальныйДетектив",
        platform_subtitle: "Выберите платформу для анализа.",
        enter_username_title: "Ввод профиля",
        enter_username_subtitle: "Введите точное имя пользователя для начала.",
        username_placeholder: "имя пользователя",
        start_btn: "Продолжить",
        back_btn: "Назад",
        status_resolving: "Анализ профиля пользователя...",
        status_analyzing: "Анализ взаимодействий...",
        status_fetching: "Извлечение скрытых данных...",
        status_delayed: "Из-за нагрузки на сервер этот процесс может занять несколько минут.",
        queue_label: "Место в очереди",
        time_label: "Ожидаемое время",
        tip: "СОВЕТ",
        ad_prompt: "Хотите быстрее? Посмотрите рекламу, чтобы продвинуться на <strong>3 места</strong> вперед!",
        ad_btn: "Смотреть рекламу (Вперед на 3)",
        ad_success: "Реклама подтверждена! Вы продвинулись на 3 места.",
        do_not_close: "Не закрывайте и не обновляйте эту страницу, соединение может быть разорвано.",
        error_title: "Профиль закрыт",
        error_desc: "Мы не смогли получить скрытые данные из-за строгих настроек конфиденциальности.",
        error_tip: "Только взаимные подписчики могут обойти эту систему защиты.",
        retry_btn: "Попробовать другой профиль",
        modal_title: "Спонсорское сообщение",
        modal_desc: "Нажмите на рекламу ниже, чтобы подтвердить и продвинуться в очереди.",
        modal_ad_text: "СПОНСОРСКАЯ РЕКЛАМА<br><small>Нажмите здесь</small>",
        modal_wait: "Вы можете закрыть через",
        modal_seconds: "секунд...",
        modal_error: "Вы должны нажать на рекламу, чтобы получить награду!",
        modal_verifying: "Проверка клика...",
        support_title: "100% Бесплатный сервис!",
        support_desc1: "Мы не берем с вас ни копейки за эту услугу.",
        support_desc2: "Однако обслуживание этих серверов обходится нам в тысячи долларов ежемесячно. Чтобы сохранить проект бесплатным, просим вас поддержать нас, нажимая на спонсорскую рекламу.",
        support_desc3: "Ваша поддержка значит для нас всё. ❤️",
        support_btn: "Я понимаю и поддерживаю",
        adblock_title: "Обнаружен AdBlock!",
        adblock_desc: "Мы полагаемся на доходы от рекламы, чтобы поддерживать работу серверов и делать этот сервис бесплатным. Пожалуйста, отключите AdBlock, чтобы продолжить.",
        adblock_btn: "Я отключил, обновить страницу",
        err_empty: "Пожалуйста, введите профиль для продолжения.",
        err_facebook: "Пожалуйста, введите действительный URL профиля Facebook (например, facebook.com/имя_пользователя).",
        err_ig_format: "Недействительное имя пользователя Instagram. Используйте только буквы, цифры, точки и подчеркивания.",
        err_ig_numeric: "Имена пользователей Instagram не могут состоять только из цифр.",
        err_tiktok: "Недействительное имя пользователя TikTok. Длина 2-24, не может заканчиваться точкой.",
        err_snapchat: "Недействительное имя пользователя Snapchat. Должно состоять из 3-15 символов и начинаться с буквы.",
        err_twitter: "Недействительное имя пользователя X/Twitter. Должно содержать от 4 до 15 символов."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Screens
    const langScreen = document.getElementById('language-screen');
    const adblockScreen = document.getElementById('adblock-screen');
    const supportScreen = document.getElementById('support-screen');
    const platformScreen = document.getElementById('platform-screen');
    const usernameScreen = document.getElementById('username-screen');
    const queueScreen = document.getElementById('queue-screen');
    const errorScreen = document.getElementById('error-screen');

    // UI Elements
    const langBtns = document.querySelectorAll('.lang-btn');
    const understandBtn = document.getElementById('understand-btn');
    const platformBtns = document.querySelectorAll('.social-btn');
    const backToPlatforms = document.getElementById('back-to-platforms');
    const selectedPlatformIcon = document.getElementById('selected-platform-icon');
    const targetInput = document.getElementById('target-username');
    const startBtn = document.getElementById('start-btn');
    const platformPrefixIcon = document.getElementById('platform-prefix-icon');
    const inputError = document.getElementById('input-error');
    
    // Queue Elements
    const statusTitle = document.getElementById('status-title');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const queueNumberEl = document.getElementById('queue-number');
    const estTimeEl = document.getElementById('est-time');
    const watchAdBtn = document.getElementById('watch-ad-btn');
    const adSuccessMsg = document.getElementById('ad-success-msg');
    const retryBtn = document.getElementById('retry-btn');

    // Modal Elements
    const adModal = document.getElementById('ad-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const fakeAdBox = document.getElementById('fake-ad-box');
    const modalCountdown = document.getElementById('modal-countdown');
    const countdownSec = document.getElementById('countdown-sec');
    const modalError = document.getElementById('modal-error');
    const modalVerifying = document.getElementById('modal-verifying');
    const refreshPageBtn = document.getElementById('refresh-page-btn');

    // Interstitial Elements
    const interstitialAd = document.getElementById('interstitial-ad');
    const interstitialCloseBtn = document.getElementById('interstitial-close-btn');
    const interstitialCountdown = document.getElementById('interstitial-countdown');
    const interstitialAdBox = document.querySelector('.interstitial-ad-box');

    let interstitialInterval = null;
    let interstitialCallback = null;

    // --- Anti-Inspect Protection ---
    // Disable Right Click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
            e.preventDefault();
            return false;
        }
        if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });

    // State
    let currentLang = 'en';
    let targetPlatform = '';
    let targetUser = '';
    
    let currentQueue = 0;
    let maxQueue = 0;
    let queueTimer = null;
    let statusTimer = null;
    let isAdVerifying = false;
    
    let modalTimerInterval = null;
    let hasClickedAd = false;

    // Ad Network URL Placeholder
    const AD_NETWORK_URL = "https://example.com/ad-network-link";

    // --- Ad Refresh & AdBlock Logic ---
    function refreshAds() {
        // This function will force a reload of your ad placeholders.
        // If you are using AdSense, it would look something like:
        // try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
        
        const adPlaceholders = document.querySelectorAll('.ad-placeholder');
        adPlaceholders.forEach(ad => {
            // Fake visual refresh effect
            ad.style.opacity = '0.3';
            setTimeout(() => { ad.style.opacity = '1'; }, 300);
        });
        console.log("Ads refreshed to maximize impressions.");
    }

    async function checkAdBlock() {
        return new Promise(resolve => {
            // AdBlock eklentilerinin otomatik olarak gizlediği isimler:
            const bait = document.createElement('div');
            bait.className = 'adsbox ad-placement doubleclick ad-banner';
            bait.style.width = '1px';
            bait.style.height = '1px';
            bait.style.position = 'absolute';
            bait.style.left = '-9999px';
            document.body.appendChild(bait);
            
            // AdBlock'un müdahale etmesi için çok kısa bir süre bekle
            setTimeout(() => {
                let isBlocked = false;
                // Eğer AdBlock varsa bu objenin boyutu 0'a iner veya display: none olur.
                if (bait.offsetHeight === 0 || window.getComputedStyle(bait).display === 'none') {
                    isBlocked = true;
                }
                
                document.body.removeChild(bait);
                resolve(isBlocked);
            }, 100);
        });
    }

    refreshPageBtn.addEventListener('click', () => {
        location.reload();
    });

    // --- Interstitial Ad Logic ---
    function showInterstitial(onClose) {
        interstitialCallback = onClose;
        interstitialCloseBtn.classList.add('hidden');
        interstitialCountdown.innerText = 5;
        interstitialAd.classList.remove('hidden');

        let t = 5;
        clearInterval(interstitialInterval);
        interstitialInterval = setInterval(() => {
            t--;
            interstitialCountdown.innerText = t;
            if (t <= 0) {
                clearInterval(interstitialInterval);
                interstitialCloseBtn.classList.remove('hidden');
            }
        }, 1000);
    }

    interstitialAdBox.addEventListener('click', () => {
        window.open(AD_NETWORK_URL, '_blank');
    });

    interstitialCloseBtn.addEventListener('click', () => {
        interstitialAd.classList.add('hidden');
        clearInterval(interstitialInterval);
        if (interstitialCallback) {
            interstitialCallback();
            interstitialCallback = null;
        }
    });


    // --- 1. Language Logic ---
    function setLanguage(lang) {
        currentLang = lang;
        const dict = translations[lang] || translations['en'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            setLanguage(e.target.getAttribute('data-lang'));
            refreshAds();
            
            // Check AdBlock right after language is chosen, before showing support screen
            const hasAdBlock = await checkAdBlock();
            
            if (hasAdBlock) {
                switchScreen(langScreen, adblockScreen);
            } else {
                switchScreen(langScreen, supportScreen);
            }
        });
    });
    
    understandBtn.addEventListener('click', () => {
        refreshAds();
        showInterstitial(() => {
            switchScreen(supportScreen, platformScreen);
        });
    });

    // --- 2. Platform Logic ---
    platformBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            refreshAds();
            targetPlatform = e.currentTarget.getAttribute('data-platform');
            const iconHtml = e.currentTarget.querySelector('i').outerHTML;
            
            selectedPlatformIcon.innerHTML = iconHtml;
            
            // Set specific colors for the big icon
            selectedPlatformIcon.className = 'platform-icon-large ' + targetPlatform;

            // Update Input UI based on platform
            targetInput.value = '';
            inputError.classList.add('hidden');
            targetInput.style.borderColor = "transparent";

            if (targetPlatform === 'facebook') {
                platformPrefixIcon.innerHTML = '<i class="fa-solid fa-link"></i>';
                targetInput.setAttribute('placeholder', 'facebook.com/username');
                targetInput.removeAttribute('data-i18n-placeholder');
            } else {
                platformPrefixIcon.innerText = '@';
                targetInput.setAttribute('placeholder', 'username');
                targetInput.setAttribute('data-i18n-placeholder', 'username_placeholder');
                // Re-apply translation if available
                const dict = translations[currentLang] || translations['en'];
                if (dict['username_placeholder']) {
                    targetInput.setAttribute('placeholder', dict['username_placeholder']);
                }
            }

            switchScreen(platformScreen, usernameScreen);
            setTimeout(() => targetInput.focus(), 300);
        });
    });

    backToPlatforms.addEventListener('click', () => {
        switchScreen(usernameScreen, platformScreen);
        targetInput.value = '';
    });

    // --- 3. Username Logic ---
    startBtn.addEventListener('click', () => {
        refreshAds();
        targetUser = targetInput.value.trim();
        inputError.classList.add('hidden');
        targetInput.style.borderColor = "transparent";

        const dict = translations[currentLang] || translations['en'];

        if (!targetUser) {
            showInputError(dict.err_empty);
            return;
        }

        // Platform-specific validation rules
        let isValid = true;
        let errorMessage = "";

        if (targetPlatform === 'facebook') {
            // Must look like a URL containing facebook.com or fb.com
            const fbRegex = /(?:https?:\/\/)?(?:www\.)?(?:mbasic\.facebook|m\.facebook|facebook|fb)\.(?:com|me)\/.+/i;
            if (!fbRegex.test(targetUser)) {
                isValid = false;
                errorMessage = dict.err_facebook;
            }
        } else if (targetPlatform === 'instagram') {
            // Letters, numbers, periods, underscores. Max 30 chars. Must have at least one letter to prevent purely numeric spam if desired, but we'll stick to standard limits.
            const igRegex = /^[a-zA-Z0-9._]{1,30}$/;
            if (!igRegex.test(targetUser)) {
                isValid = false;
                errorMessage = dict.err_ig_format;
            } else if (/^[0-9]+$/.test(targetUser)) {
                isValid = false;
                errorMessage = dict.err_ig_numeric;
            }
        } else if (targetPlatform === 'tiktok') {
            // 2-24 chars, letters, numbers, underscores, periods.
            const ttRegex = /^[a-zA-Z0-9_.]{2,24}$/;
            if (!ttRegex.test(targetUser) || targetUser.endsWith('.')) {
                isValid = false;
                errorMessage = dict.err_tiktok;
            }
        } else if (targetPlatform === 'snapchat') {
            // 3-15 chars, must start with letter.
            const snapRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,14}$/;
            if (!snapRegex.test(targetUser)) {
                isValid = false;
                errorMessage = dict.err_snapchat;
            }
        } else if (targetPlatform === 'twitter') {
            // 4-15 chars, letters, numbers, underscores
            const twRegex = /^[a-zA-Z0-9_]{4,15}$/;
            if (!twRegex.test(targetUser)) {
                isValid = false;
                errorMessage = dict.err_twitter;
            }
        }

        if (!isValid) {
            showInputError(errorMessage);
            return;
        }

        startQueueProcess();
    });

    function showInputError(msg) {
        inputError.innerText = msg;
        inputError.classList.remove('hidden');
        targetInput.style.borderColor = "#ef4444";
        // Shake effect
        targetInput.style.transform = "translateX(-5px)";
        setTimeout(() => targetInput.style.transform = "translateX(5px)", 100);
        setTimeout(() => targetInput.style.transform = "translateX(-5px)", 200);
        setTimeout(() => targetInput.style.transform = "translateX(0)", 300);
    }

    targetInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startBtn.click();
    });

    // --- 4. Queue & Progress Logic ---
    function startQueueProcess() {
        switchScreen(usernameScreen, queueScreen);
        
        // Gamified logic: Start queue between 25 and 45 (approx 8-15 mins)
        maxQueue = Math.floor(Math.random() * 21) + 25;
        currentQueue = maxQueue;
        
        updateQueueUI();
        scheduleNextDrop();
        cycleStatusText();
    }

    function scheduleNextDrop() {
        if (currentQueue <= 0) {
            triggerError();
            return;
        }

        // Drop queue by 1 every 15 to 25 seconds
        const delayMs = Math.floor(Math.random() * 10000) + 15000;
        
        queueTimer = setTimeout(() => {
            if (!isAdVerifying && currentQueue > 0 && adModal.classList.contains('hidden')) {
                currentQueue--;
                updateQueueUI();
                scheduleNextDrop();
            } else {
                // Check again later if we are busy
                queueTimer = setTimeout(scheduleNextDrop, delayMs);
            }
        }, delayMs);
    }

    function updateQueueUI() {
        if (currentQueue < 0) currentQueue = 0;
        queueNumberEl.innerText = currentQueue;
        
        // Est time: Assume ~20 seconds per spot (5-10 minutes total initially)
        const estSecondsTotal = currentQueue * 20; 
        const estMinutes = Math.floor(estSecondsTotal / 60);
        const estSeconds = estSecondsTotal % 60;
        estTimeEl.innerText = `~${estMinutes}m ${estSeconds}s`;

        // Update Progress Bar
        const progressPercent = Math.max(0, Math.min(100, Math.floor(((maxQueue - currentQueue) / maxQueue) * 100)));
        progressFill.style.width = `${progressPercent}%`;
        progressText.innerText = `${progressPercent}%`;

        if (currentQueue === 0) {
            triggerError();
        }
    }

    function cycleStatusText() {
        const dict = translations[currentLang] || translations['en'];
        
        statusTitle.innerText = dict.status_resolving;
        
        // Show next status after 4 seconds
        statusTimer = setTimeout(() => {
            statusTitle.innerText = dict.status_fetching;
            
            // Show delayed status after 6 more seconds, and keep it there
            statusTimer = setTimeout(() => {
                statusTitle.innerText = dict.status_delayed;
            }, 6000);
            
        }, 4000);
    }

    // --- Ad Mechanics (Modal Logic) ---
    watchAdBtn.addEventListener('click', () => {
        // Reset Modal State
        hasClickedAd = false;
        closeModalBtn.classList.add('hidden');
        modalError.classList.add('hidden');
        modalVerifying.classList.add('hidden');
        fakeAdBox.classList.remove('hidden');
        modalCountdown.classList.remove('hidden');
        
        adModal.classList.remove('hidden');
        
        let timeLeft = 5;
        countdownSec.innerText = timeLeft;
        
        clearInterval(modalTimerInterval);
        modalTimerInterval = setInterval(() => {
            timeLeft--;
            countdownSec.innerText = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(modalTimerInterval);
                closeModalBtn.classList.remove('hidden');
                modalCountdown.classList.add('hidden');
            }
        }, 1000);
    });

    fakeAdBox.addEventListener('click', () => {
        hasClickedAd = true;
        window.open(AD_NETWORK_URL, '_blank');
        
        // Switch to verifying state
        fakeAdBox.classList.add('hidden');
        modalCountdown.classList.add('hidden');
        closeModalBtn.classList.add('hidden');
        modalError.classList.add('hidden');
        modalVerifying.classList.remove('hidden');
        
        // Fake delay for verifying
        setTimeout(() => {
            adModal.classList.add('hidden');
            
            // Jump 3 spots
            currentQueue -= 3;
            updateQueueUI();
            
            adSuccessMsg.classList.remove('hidden');
            setTimeout(() => {
                adSuccessMsg.classList.add('hidden');
            }, 3000);
            
        }, 2500);
    });

    closeModalBtn.addEventListener('click', () => {
        if (!hasClickedAd) {
            modalError.classList.remove('hidden');
            // Change close button so they can force close on second click, or just let them close
            setTimeout(() => {
                adModal.classList.add('hidden');
            }, 2000);
        } else {
            adModal.classList.add('hidden');
        }
    });

    // --- 5. Error Screen ---
    function triggerError() {
        clearTimeout(queueTimer);
        clearTimeout(statusTimer);
        
        // Fill progress to 100% just before failing
        progressFill.style.width = '100%';
        progressText.innerText = '100%';
        
        setTimeout(() => {
            switchScreen(queueScreen, errorScreen);
        }, 500);
    }

    retryBtn.addEventListener('click', () => {
        location.reload();
    });

    // --- Utility ---
    function switchScreen(oldScreen, newScreen) {
        oldScreen.classList.remove('active');
        oldScreen.classList.add('hidden');
        
        setTimeout(() => {
            newScreen.classList.remove('hidden');
            newScreen.classList.add('active');
        }, 300);
    }

    // --- Live Counter Logic ---
    const liveCountText = document.getElementById('live-count-text');
    if (liveCountText) {
        // Base starting point > 1000
        let currentLiveUsers = Math.floor(Math.random() * 500) + 1200; 
        liveCountText.innerText = currentLiveUsers.toLocaleString();

        setInterval(() => {
            // Random fluctuation between -5 and +8
            const change = Math.floor(Math.random() * 14) - 5;
            currentLiveUsers += change;
            
            // Never drop below 1000
            if (currentLiveUsers < 1000) {
                currentLiveUsers = 1000 + Math.floor(Math.random() * 50);
            }

            liveCountText.innerText = currentLiveUsers.toLocaleString();
        }, 3500); // update every 3.5 seconds
    }
});
