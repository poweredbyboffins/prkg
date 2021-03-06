var jsondata={
  "nodes": [
    {"id": "Amazon", "group": 1,"size": 5},
    {"id": "Walmart", "group": 1, "size": 10},
    {"id": "Alibaba", "group": 1, "size": 5},
    {"id": "Google", "group": 1, "size": 10},
    {"id": "Facebook", "group": 1,"size": 4},
    {"id": "Microsoft", "group": 1,"size": 5},
    {"id": "Apple", "group": 1,"size": 20},
    {"id": "Oracle", "group": 1,"size": 5},
    {"id": "Samsung", "group": 1,"size": 10},
    {"id": "IBM", "group": 1,"size": 10},
    {"id": "Sony", "group": 1,"size": 10},
    {"id": "Retail", "group": 2,"size": 13.5},
    {"id": "E-commerce", "group": 2,"size":12.4},
    {"id": "Cloud", "group": 2,"size":11},
    {"id": "IT Hardware", "group": 2,"size":11},
    {"id": "IT Software", "group": 2,"size":11},
    {"id": "Digital Advertising", "group": 2,"size":1},
    {"id": "Gaming", "group": 2,"size":1},
    {"id": "Blockchain", "group": 2,"size":10},
    {"id": "Phones", "group": 2,"size":5},
    {"id": "TV and Entertainment", "group": 2,"size":5},
    {"id": "Driverless Cars", "group": 2,"size":5},
    {"id": "Space Travel", "group": 2,"size":5},
    {"id": "Revenue Negative Factors", "group": 4,"size":10},
    {"id": "Revenue Positive Factors", "group": 5,"size":10},
    {"id": "Price Pressure", "group": 3,"size":5},
    {"id": "Innovation", "group": 3,"size":5},
    {"id": "Regulation", "group": 3,"size":5},
    {"id": "Plateau", "group": 3,"size":5},
    {"id": "Interest Rates", "group": 3,"size":5}
  ],
  "links": [
    {"source": "Amazon", "target": "Cloud", "value": 5},
    {"source": "Amazon", "target": "Retail", "value": 4},
    {"source": "Amazon", "target": "IT Hardware", "value": 1},
    {"source": "Alibaba", "target": "IT Hardware", "value": 1},
    {"source": "Alibaba", "target": "E-commerce", "value": 1},
    {"source": "Amazon", "target": "E-commerce", "value": 1},
    {"source": "Amazon", "target": "TV and Entertainment", "value": 1},
    {"source": "Google", "target": "TV and Entertainment", "value": 1},
    {"source": "Apple", "target": "TV and Entertainment", "value": 1},
    {"source": "Alibaba", "target": "Cloud", "value": 1},
    {"source": "Google", "target": "Digital Advertising", "value": 3},
    {"source": "Facebook", "target": "Digital Advertising", "value": 7},
    {"source": "Microsoft", "target": "Gaming", "value": 7},
    {"source": "Facebook", "target": "Gaming", "value": 7},
    {"source": "Google", "target": "Gaming", "value": 7},
    {"source": "Google", "target": "Cloud", "value": 7},
    {"source": "Microsoft", "target": "Cloud", "value": 7},
    {"source": "Walmart", "target": "Retail", "value": 7},
    {"source": "Apple", "target": "Phones", "value": 7},
    {"source": "Samsung", "target": "Phones", "value": 7},
    {"source": "Sony", "target": "Phones", "value": 7},
    {"source": "Google", "target": "Phones", "value": 7},
    {"source": "IBM", "target": "Cloud", "value": 7},
    {"source": "IBM", "target": "IT Hardware", "value": 7},
    {"source": "IBM", "target": "IT Software", "value": 7},
    {"source": "Oracle", "target": "IT Software", "value": 7},
    {"source": "Oracle", "target": "Cloud", "value": 7},
    {"source": "Oracle", "target": "Blockchain", "value": 7},
    {"source": "Google", "target": "Driverless Cars", "value": 7},
    {"source": "Revenue Positive Factors", "target": "Blockchain", "value": 7},
    {"source": "Revenue Positive Factors", "target": "Space Travel", "value": 7},
    {"source": "Revenue Positive Factors", "target": "Innovation", "value": 7},
    {"source": "Revenue Negative Factors", "target": "Cloud", "value": 7},
    {"source": "Revenue Negative Factors", "target": "Interest Rates", "value": 7},
    {"source": "Revenue Negative Factors", "target": "Blockchain", "value": 7},
    {"source": "Revenue Negative Factors", "target": "Regulation", "value": 7},
    {"source": "Revenue Negative Factors", "target": "Phones", "value": 7},
    {"source": "Revenue Negative Factors", "target": "Price Pressure", "value": 7},
    {"source": "Revenue Negative Factors", "target": "Price Pressure", "value": 7},
    {"source": "Revenue Negative Factors", "target": "Plateau", "value": 7}
  ]
};

export default jsondata;
