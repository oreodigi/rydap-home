<?php

return [
    'app_links' => [
        'customer_android' => env('RYDAP_CUSTOMER_ANDROID_URL', ''),
        'customer_ios' => env('RYDAP_CUSTOMER_IOS_URL', ''),
        'driver_android' => env('RYDAP_DRIVER_ANDROID_URL', ''),
        'driver_ios' => env('RYDAP_DRIVER_IOS_URL', ''),
        'partner_android' => env('RYDAP_PARTNER_ANDROID_URL', ''),
        'partner_ios' => env('RYDAP_PARTNER_IOS_URL', ''),
        'deep_link' => env('RYDAP_DEEP_LINK', 'rydap://home'),
    ],

    'launch' => [
        'city' => 'Pune',
        'state' => 'Maharashtra',
        'upcoming_cities' => ['Mumbai', 'Nashik', 'Nagpur', 'Aurangabad'],
    ],

    'campaigns' => [
        'customer_install' => 'website_customer_install',
        'driver_signup' => 'website_driver_signup',
        'partner_join' => 'website_partner_join',
    ],
];
