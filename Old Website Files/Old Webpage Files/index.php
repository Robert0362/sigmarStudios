<?php
/*
  $Id: index.php,v 1.1 2003/06/11 17:38:00 hpdl Exp $

  osCommerce, Open Source E-Commerce Solutions
  http://www.oscommerce.com

  Copyright (c) 2003 osCommerce

  Released under the GNU General Public License
*/

define('TEXT_MAIN', '<div align="center"><h1>WELCOME TO </h1>
  <h1>THE BITZ BARN</h1>
</div>
<p></p>
<div align="Center">
<h2>We are a company by Gamers for Gamers.</h2>
<br>
<br>
<b>If you are a returning customer your information is gone and you have to recreate you account. We apologize for the inconvience.</B>
</div>
<p>
<div align="Left">
<b>We here at the Bitz Barn sell Warhammer Fantasy and 40K Bits along with all your Gaming needs.
<br>
All of our Bits are straight off the manufactures sprue\'s and have never seen any glue.
<br>
Glad you stopped by and look forward to being able to help you in your search for the bits you need to complete your army
or make that killer conversion.
<br>
We have all our supplies at 20% off retail or more.
</b>
<p></p>
<strong>Shipping</strong>
<br>
We ship via the United States Postal Service. This keeps shipping cost down. All bitz only orders, regardless of location, will never be more than 3.00 shipping.<br>
<p>
<strong>Payments</strong><br>
We accept Mastercard/Visa and Discover Through Authorize.Net.
We accept payments via PayPal. You can pay with your PayPal account or eCheck. We will also accept Domestic Money Order Only.
<br>
<br>
<strong>Forge World</strong><br>
You Read it right we have Forge World bits. We will be restocking these as they sell out. We will be restocking atleast twice a month.<br>
<br>
Check out our Sprue Central section and Complete box sets. If you need any Warhammer Fantasy or 40K boxes, contact us as we can get them for you also.
All boxes start at 20% off.
<br>
To get the prices of the items you are interested please feel free to call or email.
We can be reached at 770-490-5719 or email us at <a href="mailto:questions@bitzbarn.com">Questions</a>
<p></p>
</div>');
define('TABLE_HEADING_NEW_PRODUCTS', 'New Products For %s');
define('TABLE_HEADING_UPCOMING_PRODUCTS', 'Upcoming Products');
define('TABLE_HEADING_DATE_EXPECTED', 'Date Expected');

if ( ($category_depth == 'products') || (isset($HTTP_GET_VARS['manufacturers_id'])) ) {
  define('HEADING_TITLE', 'Let\'s See What We Have Here');
  define('TABLE_HEADING_IMAGE', '');
  define('TABLE_HEADING_MODEL', 'Model');
  define('TABLE_HEADING_PRODUCTS', 'Product Name');
  define('TABLE_HEADING_MANUFACTURER', 'Manufacturer');
  define('TABLE_HEADING_QUANTITY', 'Quantity');
  define('TABLE_HEADING_PRICE', 'Price');
  define('TABLE_HEADING_WEIGHT', 'Weight');
  define('TABLE_HEADING_BUY_NOW', 'Buy Now');
  define('TEXT_NO_PRODUCTS', 'There is no Product here at his tike Check back soon');
  define('TEXT_NO_PRODUCTS2', 'There is no Product here at his tike Check back soon');
  define('TEXT_NUMBER_OF_PRODUCTS', 'Number of Products: ');
  define('TEXT_SHOW', '<b>Show:</b>');
  define('TEXT_BUY', 'Buy 1 \'');
  define('TEXT_NOW', '\' now');
  define('TEXT_ALL_CATEGORIES', 'All Categories');
  define('TEXT_ALL_MANUFACTURERS', 'All Manufacturers');
} elseif ($category_depth == 'top') {
  define('HEADING_TITLE', 'New Stuff');
} elseif ($category_depth == 'nested') {
  define('HEADING_TITLE', 'Categories');
}
?>
