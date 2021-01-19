# JUMGA ECOMMERCE

### Contents

This is developed mainly for the flutterwave challenge and not ready for production.

<ul>
<li><a href="#req">Requirements</a></li>
<li><a href="#flu">Flutterwave Features</a></li>

<li><a href="#admin">Customer Features</a></li>
<li><a href="#pub">Merchant Features</a></li>
<li><a href="#adv">Dispatcher Features</a></li>
<li><a href="#auto">Installation</a></li>
<li><a href="#todo">Todo(s)</a></li>

</ul>

A Fullstack Javascript E-commerce marketplace web app based on react,redux,expressjs and flutterwave api
<br>
------------------------------------------------------- Features------------------------------------------------------------------

<br><br>

## Flutterwave's Feature used-

<ul id="flu">
<p>Flutterwave in by converting the amount to pay into the user's local currency using flutterwave's FX api so the user will enjoy much more local payment option.
During verification, made sure to reconfirm the fx exchange ,compared the currency and 
amount paid.
<br>
used the flutterwaves sub account api also to manage dispatcher and merchant account
so flutterwave helps handle withdrawals.
and unfortunately time up.

## Merchant Account-

<ul id="pub">
<li>Create An account</li>
<li>Activate an account by paying $20</li>
<li>Choose or invite dispatcher to use</li>

</ul>

## Customer Features

<ul id="pub">
<li>Create An account</li>
<li>Add product to cart</li>
<li>Add to wishlist</li>

</ul>

## Dispatcher Account-

<ul id="adv">

<li>create an account/li>

## Installation

### Automatic installation

<ul id="auto">
<li>clone the repo</li>
<li><code>cd jumga-backend</code></li>
<li>edit the <code>config/config.json</code> file with your mysql database</li>
<li><code>npm install</code></li>
<li><code>npm start</code></li>
<li>open a new terminal tab </li>
<li>run <code>sequelize sequelize db:seed:all</code> to seed the db with default data</li>

<li><code>cd jumga-frontend</code></li>
<li><code>npm install</code></li>
 <li><code>npm start</code></li>

</ul>

<br>

## Requirement

<div id="req">
NodeJS 12+ ,Mysql 5+

</div>

## Todo

<div id="todo">
<small>Later after the competition, </small>
<ul>
<li>Make it a complete ecommerce CMS</li>
<li>Some refactoring </li>
 
</ul>

</div>
