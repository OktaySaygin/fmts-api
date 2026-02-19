const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="6asEI9wd2UdO6iMj2Y6tt8A0sG9EKiIaIOcDsFed">
    <title>Ramadan Widget</title>
    <link rel="stylesheet" href="/css/mobile/style.css?id=3051b5c93f0373f7e593d900f6ab4f02">
</head>
<body>
    <section data-type="ramadanWidget" class="mb-4 w-full flex col-span-12 row-span-1 flex-col px-2">
        <div class="w-full ramadan-counter">
            <div class="w-full text-3xl text-white text-center">
                <a href="cbg://ramazan/anasayfa" rel="nofollow" target="_blank" class="relative flex items-center justify-center h-12">
                    <img class="object-contain" src="https://im.haberturk.com/assets/images/ramadan/ht_ramazan_eminevim_mobil.jpg" alt="" />
                </a>
            </div>
            <div class="w-full" data-test="">
                <div class="widget-dynamic-cover w-full h-16 flex justify-end items-center gap-5 relative bg-white" style="background-position: 0 0;background-image: url('https://im.haberturk.com/assets/laravel/images/common/ramadan/ramadan-banner-mobile.png'); background-size: cover; background-repeat: no-repeat;">
                    <div class="h-max w-full pl-12 pr-10">
                        <a href="cbg://ramazan/anasayfa" rel="nofollow" target="_blank" onclick="return true;" class="block bg-[#D3A17B] font-bold text-white rounded-md py-1 text-center w-full text-sm px-0 desktop3xl:px-2">RAMAZAN SAYFAMIZ</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="/js/common/ramadan/imsakiye.js?id=010af861d1323ac6dafdc2122bbe870c"></script>
</body>
</html>`);
});

module.exports = router;
