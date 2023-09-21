# Sales-of-products
## Class Diagram:
![Database](https://github.com/Uli-art/Sales-of-products/assets/78424200/81a6edfe-6f46-4ad0-912e-7884ceec104f)
## Main functionality:
### Client:
* Create/delete account
* Login/log out of your account(s)
* Change account details
* View products
* Add item to cart
* Remove item from cart
* View cart
* Product search
* Order products
* View orders
* Leave a comment
* Give a rating
* Add/remove product to (from) favorites
* View Favorite Products
* Get a discount
### Vendor:
* Create/delete account
* Login/log out of your account(s)
* Change account details
* View Income
* Add/remove product
* Change product details
## Model elements:
* `Client model` - website user (buyer). Has such characteristics as first name, last name, phone number, password.
* `The seller model` - a website user who places goods on the site for their subsequent sale. Contains fields such as company name, password, phone number, address, description of the company's activities.
* `Product model` - a structure representing the products provided. Contains product name, photo, wholesale price, retail price and background information, category, seller.
* `Order model` - a set of goods from the cart. Contains the order number, ordered goods, buyer, order status, order date, total order amount.
* `The comment model` - user review. Structure containing photo, comment text, rating.
* `A financial assessment model` - a document confirming the fact of a transaction between a client and a seller. Contains the purchase amount, order date, customer name, seller (company) name, delivery date.
