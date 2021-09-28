<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gomediquote
 */

?>
<?php
// Exit if accessed directly
if( !defined( 'ABSPATH' ) ) exit;
?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui"
          />
    <?php wp_head();  ?>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body class="home page-template page-template-home page desktop chrome page-home">
    <div class="top-header">
      <div class="container">
        <span>We've been helping people find their perfect Medicare plan for over 10 years.
        </span>
      </div>
    </div>
    <div class="sticky-phone">
      <a href="tel:18559798535" target="_blank" class="phone">
        <i class="fa fa-phone" aria-hidden="true">
        </i>
      </a>
    </div>        
    <!--[if IE]>
<div class="alert alert-warning">
You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.            </div>
<![endif]-->
    <div class="canvas-cover">
    </div>
    <div class="canvas-wrapper">
      <div class="main" id="top">
        <!-- Begin Header -->
        <header class="header home-header">
          <div class="container">
            <div class="middle">
              <a href="https://www.gomediquote.com/" class="logo-container">
                <img src="https://www.gomediquote.com/wp-content/themes/gomediquote/assets/images/logo.png" />
              </a>
            </div>
            <div class="left">
              <nav class="navigation">
                <ul>
                  <li class="phone">
                    <a href="tel:8559798535" target="_blank">1-855-979-8535
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="right">
              <a href="tel:8559798535" target="_blank" class="phone">
                <span class="byline">Questions?
                </span> 
                <span>855-979-8535
                </span>
              </a>
            </div>
          </div>
        </header>
        <!-- End Header -->
        <!-- Begin Sticky Header -->
        <header class="header sticky-header">
          <a href="#form" class="quotes-cta">                
            <div class="container">
              <span>Get Quotes
                <i class="fa fa-chevron-right">
                </i>
              </span>
            </div>
          </a>
          <div class="container">
            <div class="left">
              <nav class="navigation">
                <ul>
                  <li class="phone">
                    <a href="tel:855-979-8535" target="_blank">855-979-8535
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="middle">
              <a href="https://www.gomediquote.com" class="logo-container">
                <img src="https://www.gomediquote.com/wp-content/themes/gomediquote/assets/images/logo.png" />
              </a>
            </div>
            <div class="right">
              <a href="tel:855-979-8535" target="_blank" class="phone">
                <span class="byline">Questions?
                </span> 
                <span>855-979-8535
                </span>
              </a>
            </div>
          </div>
        </header>
        <!-- End Sticky Header -->
        <!-- Begin Hero -->
        <section class="hero" id="form">
          <div class="container">
            <div class="hero-content">
              <h1>I want to 
                <span>
                  compare
                </span>
                <br/>Medicare Supplement plans.
              </h1>
              <?php echo do_shortcode("[crmperks-forms id=1]"); ?>
              <span class="secondary-cta">Chat about my options with an agent: 
                <a href="tel:855-979-8535" target="_blank">855-979-8535</a>
              </span>
            </div>
          </div>
        </section>
        <!-- End Hero --> 
		<!-- Begin Explore Section -->
        <section class="explore-section">