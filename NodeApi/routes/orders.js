const express = require('express');
const router = express.Router();

let fs = require('fs');
// route for get  all order detail
router.get('/ordersData', (req, res) => {
    let rawdata = fs.readFileSync("./datajson/OrdersData.json");
    let orders = JSON.parse(rawdata);
    res.status(200).json(orders)
})
// route for order by order number
router.post('/orderData', (req, res) => {
    var orderNumber = req.body.orderNo;
    let rawdata = fs.readFileSync("./datajson/OrdersData.json");
    let orders = JSON.parse(rawdata);
    let orderData;
    orders.forEach(function (order, index) {
        if (order.OrderNumber == orderNumber) {
            console.log("This is the function index is:", index);
            // orders[index].pop();
            orderData = order;
        }
    });
    res.status(200).json(orderData)
})
// route for post new order data
router.post('/addOrder', (req, res) => {
var orderData = req.body;
 console.log("Buttom ", orderData);
    fs.readFile('./datajson/OrdersData.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data); //now it an object
           
            obj.push(orderData); //add some data
            var json = JSON.stringify(obj); //convert it back to json
          
            fs.writeFile('./datajson/OrdersData.json', json, function (err) {
                if (err) throw err;
                res.status(200).json({msg:'success'});
            }); // write it back 
        }
    });



});

// route for edit order
router.post('/editOrder', (req, res) => {
var od =req.body;
    let rawdata = fs.readFileSync("./datajson/OrdersData.json");
    let orders = JSON.parse(rawdata);
    orders.forEach(function (order, index) {
        if (order.OrderNumber == od.orderNumber) {
            console.log("This is the function index is:", index);
            orders[index].OrderNumber = od.orderNumber;
            orders[index].OrderDueDate = od.orderDueDate;
            orders[index].CustomerBuyerName = od.orderBuyerName;
            orders[index].CustomerAddress = od.customerAdd;
            orders[index].CustomerPhone = od.customerPhone;
            orders[index].TotalOrder = od.orderTotal;
        }
    });
    fs.writeFile('./datajson/OrdersData.json',JSON.stringify(orders) , function(err) {
            if (err) throw err;
            res.status(200).json({ msg: 'success' })
    })
});
// route for delete order
router.post('/deleteOrder', (req, res) => {
var orderNumber = req.body.id;
console.log("4444",orderNumber);
    let rawdata = fs.readFileSync("./datajson/OrdersData.json");
    let orders = JSON.parse(rawdata);
    orders.forEach(function (order, index) {
        if (order.OrderNumber == orderNumber) {
            console.log("This is the function index is:", index);
            // orders[index].pop();
            orders.splice(index, 1);
        }
    });
    fs.writeFile('./datajson/OrdersData.json',JSON.stringify(orders) , function(err) {
            if (err) throw err;
            res.status(200).json({ msg: 'success' })
    })
});




module.exports = router;