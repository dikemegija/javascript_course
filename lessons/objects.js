// {key:value,}  // [value,]// value <-> expression//



/*let name = 'Rafiks';
let type = 'cat';
let age = 4;
let food = 'chicken meat';

let name1 = 'Kis';
let type1 = 'cat';
let age1 = 4;
let food1 = 'meat';

let name2 = 'Kira';
let type2 = 'dog';
let age2 = 6;
let food2 = 'meat';*/


const Rafiks = {
    name : 'Rafiks',
    type : 'cat',
    age : 4,
    food : 'chicken meat',
    size : {
        height : 30,
        width : 50,

    },             //tikai ar ()var izsaukt funkciju
    voice : function(){
        //console.log('nau')
    }
}

const Kis = {
    name : 'Kis',
    type : 'cat',
    age : 4,
    food : 'meat',
    size : {
        height : 30,
        width : 50,
    }
}

const Kira = {
    name : 'Kira',
    type : 'dog',
    age : 6,
    food : 'meat',
    size : {
        height : 30,
        width : 30,
    } ,
    42:42 // var but ari cipari 


    
}      
            //object     //key
          //.......name//
     //key, property//value//
Rafiks.age = 5;//mainit var jebko objekta
    // console.log(Rafiks);

     Rafiks.voice()


    // console.log(Kira)


     const pets = [
         Kira, Rafiks, Kis,
        
     ]
     //console.log(pets)

     const pets2 = [
        {
            name : 'Kira',
            type : 'dog',
            age : 6,
            food : 'meat',
            size : {
                height : 30,
                width : 30,
            } ,
            42:42 // var but ari cipari 
        
        
            
        }   ,
        {
            name : 'Rafiks',
            type : 'cat',
            age : 4,
            food : 'chicken meat',
            size : {
                height : 30,
                width : 50,
        
            },             //tikai ar ()var izsaukt funkciju
            voice : function(){
               // console.log('nau')
            }
        },
        {
            name : 'Kis',
            type : 'cat',
            age : 4,
            food : 'meat',
            size : {
                height : 30,
                width : 50,
            }
        } 
     ]          //index[1]//
console.log(pets2[1].name)
console.log(pets2.length)
// viss kaam nav primitiva(cipars, boolean(true,false) ) nozime ka neietiplst objecta, viss parejais ir objecti//

console.log('Megija'.length)

console.log(pets2[0].name)
console.log(pets2[1].name)
console.log(pets2[2].name)

//while loop//lidzigs if
//while(ture) i = iteracija
let i = 0
//while (i < pets2.length) {
  //  console.log(pets2[i].name)
    //i ++;
//}

// for cikls izmantojas biezak// labak rakstit let! jo tas bus globala

for (let i = 0; i < pets2.length; i += 2){
    console.log(pets2[i].name)

}





