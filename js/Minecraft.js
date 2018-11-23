// INITIALIZE NAMESPACE
var minecraft = {};

<<<<<<< HEAD
=======
minecraft.statusDirtRemove = false;

>>>>>>> 3a71c82a82eb5ef992fa52e9e889e1f8e8a221b1

// GAME START FUNCTIONS
$(document).ready(function(){ 
    minecraft.init();
});

minecraft.init = function(){
    minecraft.initGrid();
<<<<<<< HEAD
    minecraft.initSidebar();
}
//minecraft global arrays
var tools = ['pickaxe', 'shovel', 'axe'];

// minecraft.bindClick = function(){

// };
=======
    minecraft.bindClick();
}

minecraft.bindClick = function(){
    var grid = document.getElementById("grid");
    grid.addEventListener("click", minecraft.REMOVE);
    var tool = document.getElementById("tool");
    tool.addEventListener("click", minecraft.activateDirt);
};

minecraft.activateDirt = function(){
    minecraft.statusDirtRemove = true;
}

minecraft.REMOVE = function (event){
    var clicked = event.target;

    if (minecraft.statusDirtRemove == true && clicked.dataset.name == "dirt"){
        clicked.classList.add('mined');
    }
}


>>>>>>> 3a71c82a82eb5ef992fa52e9e889e1f8e8a221b1

minecraft.initGrid = function (){
    // ARRAY OF BLOCKS
    var blockGrid = [
            // ----- ROW 1 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            }
        ],
            // ----- ROW 2 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            }
        ],
            // ----- ROW 3 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            }
        ],
            // ----- ROW 4 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "leaves",
            'img': "img/leaves.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            }
        ],
             // ----- ROW 5 -----
        [
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            }
        ],
             // ----- ROW 6 -----
        [
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "tree",
            'img': "img/tree.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "empty",
            'img': "img/empty.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            },
            {
            'name': "stone",
            'img': "img/stone.png",
            }
        ],
             // ----- ROW 7 -----
        [
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            },
            {
            'name': "grass",
            'img': "img/grass.png",
            }
        ],
             // ----- ROW 8 -----
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            }
        ],
             // ----- ROW 9 -----
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            }
        ],
             // ----- ROW 10 -----
        [
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            },
            {
            'name': "dirt",
            'img': "img/dirt.png",
            }
        ]
    ];

    

    // CREATE GRID
    var game = document.getElementById('game');
    var grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    grid.setAttribute('id', 'grid');
    game.appendChild(grid);

    blockGrid.forEach(Array =>{
        Array.forEach(item => {
            var block = document.createElement('div');
            block.classList.add('block');
            block.dataset.name = item.name;
            block.style.backgroundImage = `url(${item.img})`;
            grid.appendChild(block);
        })
    });
<<<<<<< HEAD
}

minecraft.initSidebar = function (){
    var sidebar = $('#sidebar');
    for (var i =0 ; i < tools.length ; i ++){
        var tool = document.createElement('button');
        tool.style.backgroundImage = `url(img/${tools[i]}.png)`;
        tool.classList.add('tools');
        tool.classList.add(tools[i]);
        var toolLabel = document.createElement('img');
        toolLabel.src= "img/" + tools[i] + "label.png";
        toolLabel.classList.add('tool-label');
        tool.append(toolLabel);
        sidebar.append(tool);
        console.log('append');
    }
}  
=======
}
>>>>>>> 3a71c82a82eb5ef992fa52e9e889e1f8e8a221b1
