webix.protoUI({
    name:"dhx-reference",
    $init:function(){
        webix.delay(webix.bind(this._render_once, this));
    },
    $setSize: function(x,y){
        if(webix.ui.view.prototype.$setSize.call(this,x,y)){
            if(window.reference)
                reference.render();
        }
    },
    _render_once:function(){
        webix.require("libs/reference/dhtmlxreference.css");
        webix.require("libs/reference/dhtmlxreference.js", function(){
            if (this.config.init)
                this.config.init.call(this);

            gantt.init(this.$view);
            if (this.config.ready)
               this.config.ready.call(this);

        }, this);
    },

}, webix.ui.view);

// webix.ready(function(){
//             grida = webix.ui({
//                 container:"testA",
//                 view:"datatable",
//                 columns:[
//                     { id:"rank",    header:"", css:"rank",          width:50},
//                     { id:"title",   header:"Film title",width:200},
//                     { id:"year",    header:"Released" , width:80},
//                     { id:"votes",   header:"Votes",     width:100}
//                 ],
//                 autoheight:true,
//                 autowidth:true,
//                 data: [
//                     { id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1},
//                     { id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2}
//                 ]
//             });

// dataTable: function() {
//     webix.ui({
//     rows: [
//         {type:"header", template:"Список пользователей"},
//         {cols: [
//             {view: "treepanel1", id: "tree1", select: true, gravity: 0.4},
//             {view:"resizer"},
//             {view: "gridpanel", id: "grid1", slaveurl: persons,
//                 columns: [
//                     {id: "id", header: ["№", {content: "serverFilter"}]},
//                     {id: "name", header: ["Имя", {content: "serverFilter"}]},
//                     {id: "phone", header: ["Телефон", {content: "serverFilter"}]}
//                 ]
//             }
//         ]}
//     ]
//     });
// }









// webix.ready(function(){
//             grida = webix.ui({
//                 container:"testA",
//                 view:"datatable",
//                 columns:[
//                     { id:"rank",    header:"", css:"rank",          width:50},
//                     { id:"title",   header:"Film title",width:200},
//                     { id:"year",    header:"Released" , width:80},
//                     { id:"votes",   header:"Votes",     width:100}
//                 ],
//                 autoheight:true,
//                 autowidth:true,
//                 data: [
//                     { id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1},
//                     { id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2}
//                 ]
//             }); 
            
//             gridb = webix.ui({
//                 container:"testB",
//                 view:"datatable",
//                 columns:[
//                     { id:"rank",    header:"", css:"rank",          width:50},
//                     { id:"title",   header:"Film title",width:200},
//                     { id:"year",    header:"Released" , width:80},
//                     { id:"votes",   header:"Votes",     width:100}
//                 ],
//                 autoheight:true,
//                 autowidth:true,

//                 datatype:"xml",
//                 data:'<data><item id="1" title="The Shawshank Redemption" year="1994" votes="678790" rating="9.2" rank="1" /><item id="2" title="The Godfather" year="1972" votes="511495" rating="9.2" rank="2" /></data>'

//             }); 
            
            
//             gridc = webix.ui({
//                 container:"testC",
//                 view:"datatable",
//                 columns:[
//                     { id:"data5",   header:"", css:"rank",          width:50},
//                     { id:"data1",   header:"Film title",width:200},
//                     { id:"data2",   header:"Released" , width:80},
//                     { id:"data3",   header:"Votes",     width:100}
//                 ],
//                 autoheight:true,
//                 autowidth:true,

//                 datatype:"csv",
//                 data:'1,The Shawshank Redemption,1994,678790,9.2,1\n2,The Godfather,1972,511495,9.2,2'
//             }); 
            
//             gridd = webix.ui({
//                 container:"testD",
//                 view:"datatable",
//                 columns:[
//                     { id:"data5",   header:"", css:"rank",          width:50},
//                     { id:"data1",   header:"Film title",width:200},
//                     { id:"data2",   header:"Released" , width:80},
//                     { id:"data3",   header:"Votes",     width:100}
//                 ],
//                 autoheight:true,
//                 autowidth:true,

//                 datatype:"jsarray",
//                 data:[
//                     [1,"The Shawshank Redemption",1994,678790,9.2,1],
//                     [2,"The Godfather",1972,511495,9.2,2]
//                 ]
//             });                             
//         });