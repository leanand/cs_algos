// const util = require('util');

(function(){
  var binary_tree = function(){
    console.log("Creating binary tree");
    this.rootNode = {};
  };

  binary_tree.prototype.createNode = function(value){
    if(!value){
      throw new Error("No value given while creating new node");
    }

    var currentNode = this.rootNode;

    while(currentNode.value){
      if(value > currentNode.value){
        currentNode = currentNode.rightNode;
      }else{
        currentNode = currentNode.leftNode;
      }
    }
    Object.assign(currentNode, {
      value: value,
      leftNode: {},
      rightNode: {}
    });
  }

  binary_tree.prototype.findNode = function(value){
    if(!value){
      throw new Error("Value needed to find the node");
    }

    var currentNode = this.rootNode;
    while(currentNode.value){
      if(currentNode.value == value){
        return currentNode;
      }else if(currentNode.value < value){
        currentNode = currentNode.rightNode;
      }else{
        currentNode = currentNode.leftNode;
      }
    }
    return null;
  }

  binary_tree.prototype.deleteNode = function(value){
    if(!value){
      throw new Error("Value needed to delete the node");
    }

    var currentNode = this.rootNode;
    var previousNode = null;
    var childPosition = null;

    while(currentNode.value && currentNode.value !== value){
      previousNode = currentNode;
      if(currentNode.value < value){
        currentNode = currentNode.rightNode;
        childPosition = "right";
      }else{
        currentNode = currentNode.leftNode;
        childPosition = "left";
      }
    }
    if(currentNode && currentNode.value == value){
      if(currentNode.leftNode.value && currentNode.rightNode.value){
        var tempNode = currentNode.rightNode;
        while(tempNode  && tempNode.leftNode.value !=null){
          tempNode = tempNode.leftNode;
        }
        currentNode.value = tempNode.value;
        Object.assign(tempNode, {
            value: null,
            leftNode: null,
            rightNode: null
          });

      }else if( currentNode.leftNode.value){
        if(childPosition == "right"){
          previousNode.rightNode = currentNode.leftNode;
          Object.assign(currentNode, {
            value: null,
            leftNode: null,
            rightNode: null
          });
        }else{
          previousNode.leftNode = currentNode.leftNode
          Object.assign(currentNode, {
            value: null,
            leftNode: null,
            rightNode: null
          });
        }
      }else if( currentNode.rightNode.value){
        if(childPosition == "right"){
          previousNode.rightNode = currentNode.rightNode;
          Object.assign(currentNode, {
            value: null,
            leftNode: null,
            rightNode: null
          });
        }else{
          previousNode.leftNode = currentNode.rightNode
          Object.assign(currentNode, {
            value: null,
            leftNode: null,
            rightNode: null
          });
        }
      }else{
        if(childPosition =="right"){
          previousNode.rightNode = {};
        }else{
          previousNode.leftNode = {};
        }
      }
    }else{
      return null;
    }
  }

  var b1 = new binary_tree();
  b1.createNode(5);
  b1.createNode(2);
  b1.createNode(-4);
  b1.createNode(3);
  b1.createNode(12);
  b1.createNode(9);
  b1.createNode(21);
  b1.createNode(19);
  b1.createNode(25);
  console.log(b1);

  b1.deleteNode(12);
  console.log(b1);
})();