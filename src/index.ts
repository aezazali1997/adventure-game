#! /usr/bin/env node
import readline from 'readline-sync'


const generateRandom = (value:number)=>{
    return Math.floor(Math.random()*value)
}

let userInput:string="";
let enemies:string[]=["Skeleton","Zombie","Warrier","Assasin"]
let maxEnemyHealth:number=75
let enemyAttackDamage:number=25;
let health:number=100;
let attackDamage:number=50;
let numHealthPotion:number=3;
let healthpotionAmount:number=30;
let healthPotionDropChance:number=50;
let running:boolean=true;

const main = ()=>{
    
        console.log('Welcome to Dungeon Game....!')
    
    while(running){
        
        console.log('---------------------------------')
        
        let enemyHealth= generateRandom(maxEnemyHealth);
        let enemy = enemies[generateRandom(enemies.length-1)]
        console.log('enemy ',enemy)
        
        console.log('\t# '+enemy + ' has appear! #\n');
        
        while(enemyHealth>0){
            userInput = readline.question("\tYour HP: "+health+
            "\t"+enemy+"'s HP:"+enemyHealth+
            "\n\n"+"\tWhat do you want to do?\n"+   
            "\t1. Attack\n"+
            "\t2. Drink Health Potion\n"+
            "\t3. Run\n"
            )

            switch(userInput){
            case "1":{
                let damageDealth =generateRandom(attackDamage);
                let damageTaken = generateRandom(enemyAttackDamage);
                enemyHealth -=damageDealth;
                health -= damageTaken;
                console.log('\t> You strike the '+enemy + " for " + damageDealth + " damage.")
                console.log('\t> You Recieve the '+damageTaken + " in retaliation ")
                if(health<1){
                    console.log('you have taken too much damage,you are too weak to go on!');
                    break;
                }
                break;
            }
            case "2":{
                if(numHealthPotion>0){
                    health+=healthpotionAmount;
                    numHealthPotion--;
                    console.log('\t> You drink a health potion,healing yourself for '+healthpotionAmount+ '.'+
                    "\t> you now have "+ health + " HP."+
                    "\t> you now have "+ numHealthPotion + " health potions left\n"
                    )
                }
                else{
                    console.log('\t> you have no health potions left! Defeat enemies for a chance to get one!');

                }


                break;
            }
            case "3":{
                    console.log("\t> You ran away from "+enemy+"!");
                    break; 

                break;
            }
            default: {
                console.log('\tInvalid input.')


                break;
            }









            }
            if(userInput==='3'){
                break;

            }

        }
        if(health<1){
            console.log('you limp out of dungean, weak from battle')
            break;
        }
        console.log('----------------------------------------');
        console.log(' #  '+ enemy + '  was defeated #')
        console.log(' # you have '+ health + " Hp left");
        if(generateRandom(100) <= healthPotionDropChance){
            numHealthPotion++;
            console.log(' # The ' + enemy + ' dropped a health potion! #');
            console.log(' # you now have '+ numHealthPotion + " health potion(s). #")
        }
        console.log('----------------------------------------');
        let input = readline.question('What would you like to do now?\n1. Continue fighting\n2. Exit Dungeon.')
        while(input !== "1" && input !== "2"){
            console.log('invalid input')
            input = readline.question('What would you like to do now?\n1. Continue fighting\n2. Exit Dungeon.')
        }
        if(input==='1'){
                console.log('you continue on your adventure!')
        }
        else if (input==='2'){
            console.log('You exit the dungeon successfully from your adventure')
            break;
        }
        
    }
     console.log('##########')

     console.log('# Thansk for playing! # ')

     console.log('##########')
     


}

main();
