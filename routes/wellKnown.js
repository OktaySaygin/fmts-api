const express = require('express');
const router = express.Router();

const appleAppSiteAssociation = {
    applinks: {
        apps: [],
        details: [
            {
                appID: '4RV865CHHB.com.invemo.firstapp',
                paths: [
                    '/video/*',
                    '/news/*',
                    '/dizi/*',
                    '/canliyayin',
                    '/program/*',
                ],
            },
        ],
    },
};

const assetLinks = [
    {
        relation: ['delegate_permission/common.handle_all_urls'],
        target: {
            namespace: 'android_app',
            package_name: 'cbg.android.showtv',
            sha256_cert_fingerprints: [
                'D9:0B:EF:77:D4:D3:94:C8:2A:93:26:F9:25:79:0E:44:4E:B3:CB:44:CE:34:EE:FB:80:7E:87:81:15:38:E4:E6',
            ],
        },
    },
];

router.get('/apple-app-site-association', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(appleAppSiteAssociation);
});

router.get('/assetlinks.json', (req, res) => {
    res.json(assetLinks);
});

module.exports = router;
