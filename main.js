let drawBut = document.getElementById("drawBut");
let d1Draw = document.getElementById("d1Draw");
let d2Draw = document.getElementById("d2Draw");
let d3Draw = document.getElementById("d3Draw");
let output4 = document.getElementById("output4");
let draw = document.getElementById("draw");
let name = document.getElementById("name");
let d4 = document.getElementById("d4");
let d4Hitbox = document.getElementById("d4Hitbox");
let collisionMessage = document.getElementById("collisionMessage");
let isJumping = false;
let collisionHappened = false;
let ePic = document.getElementById("ePic");
let jumpscare = document.getElementById("jumpscare");
let wait = document.getElementById("wait");
let killed = document.getElementById("killed")
let blood = document.getElementById("blood")
let gun = document.getElementById("gun")
let gunItem = document.getElementById("gunItem")
let f = document.getElementById("f")
let pistolShot = document.getElementById("pistolShot")
let bullet = document.getElementById("bullet")
let fix = document.getElementById("fix")
let error = document.getElementById("error")
let star;
let shield = document.getElementById("shield")
let shieldItem = document.getElementById("shieldItem")
let collisionHappened2 = false;
let boots = document.getElementById("boots")
let isJumpingBoots = false;
let dinoSelected = 0;
let dinoSelectedTime = 302000
let gunMathInterval = 1000;
let gunMathChance = 0.05;
let bossP1HP = 3;
let shieldMathChance = 0.09;



drawBut.addEventListener('click', function () {
starFunc()
disaper()
bootsStartSpawn()

  let time = 0;
setInterval(()=>{
t.textContent="TIME SURVIVED:" + time;
time++
},1000)

  setTimeout(() => {
  startSpawning();
}, 5500);
  drawFuc();
  spin.play();
  drawBut.style.display = "none";

  
setTimeout(e2SpawnTime, 40000)
});

let star1 = document.getElementById("star1")

function drawFuc() {
  document.body.classList.add("atmosphere")
  sun.classList.add("start")
  
//ATMOSPHERE 2
  setTimeout(()=>{
 document.body.classList.add("atmosphere2")
  moon.classList.add("start")

//ATMOSPHERE 3
  setTimeout(()=>{
  document.body.classList.add("atmosphere3")
  moon.classList.add("bye1")
  sun.classList.add("back")

const starElements = document.querySelectorAll('.star');
starElements.forEach(starElement => {
  starElement.classList.add('starAniRemove');
});

//ATMOSPHERE 4
setTimeout(()=>{
  
setTimeout(()=>{
raining.classList.add("rainingShow")
},500);
raining.style.display="block"

const pixels = document.querySelectorAll('.pixel:not(.transparent)');

pixels.forEach(pixel => pixel.style.backgroundColor = "blue");


document.body.classList.add("atmosphere4")
clearInterval(gunEInterval)

//night 2 Atmosphere5
setTimeout(()=>{
sun.classList.add("start2")
document.body.classList.add("atmosphere5")
moon2.classList.add("start2")

setTimeout(()=>{
raining.classList.remove("show")
const pixels = document.querySelectorAll('.pixel:not(.transparent)');

pixels.forEach(pixel => pixel.style.backgroundColor = "white");
setTimeout(()=>{
raining.style.display="none"
},3000)
},15500)

//ATMOSPHERE 6 MOON EATED
setTimeout(()=>{
setTimeout(()=>{
boss1.classList.add("Go")
setTimeout(()=>{
eat.classList.add("Go")
moon2.classList.add("eated")
  setTimeout(()=>{
  moon2.style.display="none"
  eat.style.display="none"
  eating.classList.add("Go")
    setTimeout(()=>{
    eating.style.display="none"
    eating2.style.display="block"
    setTimeout(()=>{
    eating2.style.display="none"
    eatDone.style.display="block"
  setTimeout(()=>{
    eatDone.style.opacity="0"
    boss1.classList.add("hide")
    boss1Half.classList.add("hide")
    boss1.style.transition="2.5s"
    
    setTimeout(()=>{
      boss1.style.display="none"
      boss1Half.style.display="none"
    },2500)
    
  },1500)
    boss1Half.style.display="block"
    bloodMoon.classList.add("Go2")
      setTimeout(()=>{
      eatDone.style.display="none"
      boss1Half.style.display="none"
      boss1.style.display="none"

//BOSS1P1 
setTimeout(()=>{
 
 
//BOSSSSSSS BATTTTLE

//BOSS1P1
setTimeout(()=>{
boss1P1.classList.add("show")  
// Stop all rocks after 3 seconds

//BOSS1P1

setTimeout(() => {
  isStopped = true;
  bossM1.classList.add("M")
  boss1P1.classList.add("talkAni")
 setTimeout(()=>{
  jakeM.style.opacity="1"
  d1Stop.classList.add("talkAni")
  d2Stop.classList.add("talkAni")
  d3Stop.classList.add("talkAni")
  d4Stop.classList.add("talkAni")
  
  setTimeout(()=>{
  gunMathChance = 6;
  shieldMathChance = 9; 
  jake.style.transition="3s"
  jakeM.style.opacity="0"
  bossHp.style.display="block"
  hpDisplay.style.display="block"
  endless.style.display="none"
  gun.style.display="block"
  shiny.style.display="block"
  gun.classList.add("give")
  shiny.classList.add("give")
bossM2.classList.add("M")
boss1P1.classList.add("talkAni2")

//SUMMON 3 ALDEN
let haha = setInterval(()=>{
let enemy = document.createElement("img");
  enemy.src = "enemy1.jpg";
  enemy.className = "enemyClone";
  enemy.style.position = "absolute";
  enemy.style.top = "220px";
  enemy.style.left = window.innerWidth + "px";
  enemy.style.height = "50px";
  enemy.style.width = "37px";
  document.body.appendChild(enemy);

  let x = window.innerWidth;
  let moveInterval = setInterval(() => {
    x -= 3;
    enemy.style.left = x + "px";
    if (x < -50) {
      clearInterval(moveInterval);
      enemy.remove();
    }
  }, 10);

},800);
setTimeout(()=>{
clearInterval(haha)
    },3000)

setTimeout(()=>{
bossM3.classList.add("M")
boss1P1.classList.add("talkAni3")


},5000)

  },3000)
 },3000)

}, 2000);
},1000);





let isAnimating = false; // Flag to track animation status
function checkCollisionBoss() {
    let boss1P1Bound = boss1P1.getBoundingClientRect()

    const bullets = document.querySelectorAll(".bullet");

    bullets.forEach(bullet => {
        const bulletRect = bullet.getBoundingClientRect();

        
            // Collision detection with enemies
            if (
                bulletRect.left < boss1P1Bound.right &&
                bulletRect.right > boss1P1Bound.left &&
                bulletRect.top < boss1P1Bound.bottom &&
                bulletRect.bottom > boss1P1Bound.top
            ) {

function glitchBoss() {
  if (!isAnimating) {
    isAnimating = true;
    boss1P1.classList.add("boss1Hit");
    setTimeout(() => {
      boss1P1.classList.remove("boss1Hit");
      isAnimating = false; // Reset the flag after animation completes
    }, 1000); // 1000 milliseconds = 1 second (animation duration)
  }
}
             
    
bullet.remove();
const boss1P1 = document.getElementById('boss1P1');
glitchBoss()

currentHp--;
updateHpDisplay();
bossP1HP--;
if(bossP1HP == 0){
boss1P2Func()
boss1P1.style.display="none"
boss1P2.style.display="block"
gunBoss1.style.display="block"
gunBoss2.style.display="block"
clearInterval(haha)
bossM4.classList.add("M")

//THE GAME IS UNFINISHED 
setTimeout(()=>{
bossM5.classList.add("M")
alert("boss1P2Func()")



},3000);

}
            }
    });
}

setInterval(checkCollisionBoss, 100);




const hpHearts = document.getElementById('hp-hearts');
const reduceHpButton = document.getElementById('reduce-hp');
let currentHp = 3;

function updateHpDisplay() {
  let hearts = '';
  for (let i = 0; i < currentHp; i++) {
    hearts += '♥ ';
  }
  hpHearts.textContent = hearts;

  if (currentHp <= 0) {
  //BOSS 2
  
    }
  
}


//BOSS BATTLE





 
},4000);



   },20000)
      
  
  
  
},2000)



      },3500)
  },3000)
  },3000)
  },3000)

//ATMOSPHERE 6 BLOOD MOON
setTimeout(()=>{
document.body.classList.add("atmosphere6")

  
  
},20000)




},21000)
},30000);


},20000)

  },60000)
  },130000)
  
  /*
 },5000)
      
  
  
},5000)
 
 


      },3500)
  },3000)
  },3000)
  },3000)
},3000)




},5000)
},5000);


},20000)

  },60000)
  },000) 
  */
  let draw = Math.random();
  console.log(draw);


  setTimeout(() => {
    if (draw < 0.07) {
    
      dinoSelected += 4;

if(dinoSelected == 1){
setTimeout(()=>{
dinoNone()
d1Stop.style.display="block"
},dinoSelectedTime)
} 
if(dinoSelected == 2){
setTimeout(()=>{
dinoNone()
d2Stop.style.display="block"

},dinoSelectedTime)
} 
if(dinoSelected == 3){
setTimeout(()=>{
dinoNone()
d3Stop.style.display="block"
},dinoSelectedTime)
}
if(dinoSelected == 4){
setTimeout(()=>{
dinoNone()
d4Stop.style.display="block"

},dinoSelectedTime)  
} 

function dinoNone(){
d1.style.display="none"
d2.style.display="none"
d3.style.display="none"
d4.style.display="none"
}

      jeffS.play()
setTimeout(()=>{
invBtn.style.display="block"
invBtn.addEventListener('click', function(){
      jeffS2.play()
      invBtn.style.display="none"
})
},172000)
    
      
      d4Draw.style.background = "violet";
      d1Draw.style.background = "none";
      d2Draw.style.background = "none";
      d3Draw.style.background = "none";
      output4.textContent = "Jeff";
      spin.pause();
      selected2.play();
      d4Draw.classList.add("show");
      d4.style.display = "block";
    } else if (draw < 0.4) {
  dinoSelected +=1

if(dinoSelected == 1){
setTimeout(()=>{
dinoNone()
d1Stop.style.display="block"
},dinoSelectedTime)
} 
if(dinoSelected == 2){
setTimeout(()=>{
dinoNone()
d2Stop.style.display="block"

},dinoSelectedTime)
} 
if(dinoSelected == 3){
setTimeout(()=>{
dinoNone()
d3Stop.style.display="block"
},dinoSelectedTime)
}
if(dinoSelected == 4){
setTimeout(()=>{
dinoNone()
d4Stop.style.display="block"

},dinoSelectedTime)  
} 

function dinoNone(){
d1.style.display="none"
d2.style.display="none"
d3.style.display="none"
d4.style.display="none"
}

jakeS.play()
setTimeout(()=>{
invBtn.style.display="block"
invBtn.addEventListener('click', function(){
      jakeS2.play()
      invBtn.style.display="none"
})
},110000)




      d1Draw.style.background = "red";
      d3Draw.style.background = "none";
      output1.textContent = "Jake";
      spin.pause();
      selected.play();
      d1.style.display = "block";
    } else if (draw < 0.7) {
    
  dinoSelected += 2
  
if(dinoSelected == 1){
setTimeout(()=>{
dinoNone()
d1Stop.style.display="block"
},dinoSelectedTime)
} 
if(dinoSelected == 2){
setTimeout(()=>{
dinoNone()
d2Stop.style.display="block"

},dinoSelectedTime)
} 
if(dinoSelected == 3){
setTimeout(()=>{
dinoNone()
d3Stop.style.display="block"
},dinoSelectedTime)
}
if(dinoSelected == 4){
setTimeout(()=>{
dinoNone()
d4Stop.style.display="block"

},dinoSelectedTime)  
} 

function dinoNone(){
d1.style.display="none"
d2.style.display="none"
d3.style.display="none"
d4.style.display="none"
}

    jorossS.play()
setTimeout(()=>{
invBtn.style.display="block"
invBtn.addEventListener('click', function(){
    jorossS2.play()
      invBtn.style.display="none"
})
},119000)
    

  
      
      
      
      d2Draw.style.background = "red";
      d1Draw.style.background = "none";
      d3Draw.style.background = "none";
      output2.textContent = "Joross";
      output2.style.color = "orange";
      spin.pause();
      selected.play();
      d2.style.display = "block";
    } else if (draw > 0.7) {
  dinoSelected += 3
  
if(dinoSelected == 1){
setTimeout(()=>{
dinoNone()
d1Stop.style.display="block"
setTimeout(()=>{
jakeV.play()
},2000)
},dinoSelectedTime)

} 
if(dinoSelected == 2){
setTimeout(()=>{
dinoNone()
d2Stop.style.display="block"
setTimeout(()=>{
jorossV.play()
},2000)
},dinoSelectedTime)
} 
if(dinoSelected == 3){
setTimeout(()=>{
dinoNone()
d3Stop.style.display="block"
setTimeout(()=>{
jebV.play()
},2000)
},dinoSelectedTime)
}
if(dinoSelected == 4){
setTimeout(()=>{
dinoNone()
d4Stop.style.display="block"

},dinoSelectedTime)  
} 

function dinoNone(){
d1.style.display="none"
d2.style.display="none"
d3.style.display="none"
d4.style.display="none"
}
  
    jebS.play()
setTimeout(()=>{
invBtn.style.display="block"
invBtn.addEventListener('click', function(){
      jebS2.play()
      invBtn.style.display="none"
})
},160000)
    

  
      
    
      d3Draw.style.background = "red";
      d2Draw.style.background = "none";
      output3.textContent = "Jeb";
      output3.style.color = "brown";
      spin.pause();
      selected.play();
      d3.style.display = "block";
    }
  setTimeout(()=>{
  gunFunc();
  
  shieldFunc();
  
  },6000);
  }, 3000);


  let intervalCount = 0;
  let intervalValue = setInterval(() => {
    intervalCount++;
    if (intervalCount > 3) {
      clearInterval(intervalValue);
    }

    setTimeout(() => {
      d1Draw.style.background = "red";
      d3Draw.style.background = "none";
      setTimeout(() => {
        d2Draw.style.background = "red";
        d1Draw.style.background = "none";
        setTimeout(() => {
          d3Draw.style.background = "red";
          d2Draw.style.background = "none";
        }, 50);
      }, 100);
    }, 150);
  }, 300);

  setTimeout(() => {
    drawNone.classList.add("hide");
    name.classList.add("hide");
    output4.classList.add("hide");
    setTimeout(() => {
      start.textContent = "Tap the screen to start!";
      startFunc();
    }, 1000);
  }, 6000);
}

function startFunc() {
  document.addEventListener("click", function startGame() {
    if (collisionHappened) return;
    start.style.display = "none";
    document.removeEventListener("click", startGame);
  });
}

function spawnEnemy() {
  let enemy = document.createElement("img");
  enemy.src = "enemy1.jpg";
  enemy.className = "enemyClone";
  enemy.style.position = "absolute";
  enemy.style.top = "220px";
  enemy.style.left = window.innerWidth + "px";
  enemy.style.height = "50px";
  enemy.style.width = "37px";
  document.body.appendChild(enemy);

  let x = window.innerWidth;
  let moveInterval = setInterval(() => {
    x -= 3;
    enemy.style.left = x + "px";
    if (x < -50) {
      clearInterval(moveInterval);
      enemy.remove();
    }
  }, 10);
}

let spawner;
let spawnerTime;
function startSpawning() {
  spawner = setInterval(() => {
    if (Math.random() < 0.3) {
      spawnEnemy();
      clearInterval(spawner);
spawnerTime = setTimeout(() => {
        startSpawning();
      }, 2000);
    }
  }, 1000);
}




function jumpHandler() {





  let gunItem = document.getElementById("gunItem")
  if (collisionHappened) {
    location.reload();
    return;
  }

  if (isJumping) return;
  isJumping = true;
  gunItem.classList.add("jump")
  shieldItem.classList.add("jump")
  bootsItem.classList.add("jump")
  bootsItem2.classList.add("jump")
  
  

  d1.classList.add("jump");
  d2.classList.add("jump");
  d3.classList.add("jump");
  d4.classList.add("jump");
  d4Hitbox.classList.add("jump");
  
  d1Stop.classList.add("jump");
  d2Stop.classList.add("jump");
  d3Stop.classList.add("jump");
  d4Stop.classList.add("jump");
  setTimeout(() => {
    gunItem.classList.remove("jump")
    shieldItem.classList.remove("jump")
    bootsItem.classList.remove("jump")
    bootsItem2.classList.remove("jump")
    d1Stop.classList.remove("jump");
    d2Stop.classList.remove("jump");
    d3Stop.classList.remove("jump");
    d4Stop.classList.remove("jump");
    d1.classList.remove("jump");
    d2.classList.remove("jump");
    d3.classList.remove("jump");
    d4.classList.remove("jump");
    d4Hitbox.classList.remove("jump");
    
    isJumping = false
    ;
  }, 600);
}

document.addEventListener("click", jumpHandler);








function checkCollision() {
  if (collisionHappened) return;

  let hb = d4Hitbox.getBoundingClientRect();
  let enemies = document.querySelectorAll(".enemyClone");

  for (let enemy of enemies) {
    let en = enemy.getBoundingClientRect();

    if (
      hb.left < en.right &&
      hb.right > en.left &&
      hb.top < en.bottom &&
      hb.bottom > en.top
    ) {
      killed.play()
      blood.style.opacity="1"
      d1.classList.add("die")
      d2.classList.add("die")
      d3.classList.add("die")
      d4.classList.add("die")
      
      jakeS.pause()
      jebS.pause()
      jorossS.pause()
      jeffS.pause()
      jakeS2.pause()
      jebS2.pause()
      jorossS2.pause()
      jebS2.pause()
    
      
      document.removeEventListener("click", jumpHandler);
      //remove event listener
    setTimeout(()=>{
        document.addEventListener("click", jumpHandler);
     //add event listener after
      },2000)
      
      ePic.classList.add("show2");
      setTimeout(() => {
        ePic.classList.add("show");
      }, 300);
      collisionMessage.style.display = "block";
      jumpscare.play();
      collisionHappened = true;
      clearInterval(collisionInterval);
      break;
    }
  }
}

let collisionInterval = setInterval(checkCollision, 100);





//Clouds & Sun
const cloudPatterns = [
      [
        "00100",
        "01110",
        "11111"
      ],
      [
        "00010",
        "00111",
        "01110"
      ],
      [
        "01000",
        "11100",
        "01110"
      ]
    ];

    function createCloud(top, speed) {
      const cloud = document.createElement("div");
      cloud.className = "cloud";
      cloud.style.top = top + "px";
      document.body.appendChild(cloud);

      const pattern = cloudPatterns[Math.floor(Math.random() * cloudPatterns.length)];
      for (let row of pattern) {
        for (let char of row) {
          const pixel = document.createElement("div");
          pixel.className = "pixel" + (char === "0" ? " transparent" : "");
          cloud.appendChild(pixel);
        }
      }

      let left = window.innerWidth + Math.random() * 200;
      function move() {
        left -= speed;
        cloud.style.left = left + "px";
        if (left < -60) {
          left = window.innerWidth + Math.random() * 100;
          cloud.style.top = (50 + Math.random() * 150) + "px";
        }
        requestAnimationFrame(move);
      }
      move();
    }

    for (let i = 0; i < 5; i++) {
      const top = 50 + Math.random() * 150;
      const speed = 0.2 + Math.random() * 0.5;
      createCloud(top, speed);
    }

let i = 0;
function gunFunc(){
setInterval(()=>{
let gunMath = Math.random()
console.log(gunMath)
if (gunMath < gunMathChance){
  ammoRefill()
  gun.style.display="block"
  shiny.style.display="block"
  gun.classList.add("give")
  shiny.classList.add("give")
  i++
  if(i >= 2){
    gunDefault()
  setTimeout(()=>{
  gunAgain()
  },1000)
  }
}
},gunMathInterval);
}

function gunDefault(){
  gun.style.left="360px"
  shiny.style.left="360px"
  gun.style.display="block"
  shiny.style.display="block"
}

function gunAgain(){
  gun.classList.add("give2")
}


function isColliding2(d4Hitbox, gun) {
  return !(
    d4Hitbox.left > gun.right ||
    d4Hitbox.right < gun.left ||
    d4Hitbox.top > gun.bottom ||
    d4Hitbox.bottom < gun.top
  );
}

// Get the elements (assuming 'd4Hitbox' and 'gun' are DOM elements)
const d4HitboxElement = document.getElementById('d4Hitbox'); // Replace 'd4Hitbox' with the actual ID
const gunElement = document.getElementById('gun');       // Replace 'gun' with the actual ID

// Function to check for collision and handle the result
function checkCollision2() {
  let div1Bound = d4HitboxElement.getBoundingClientRect();
  let div2Bound = gunElement.getBoundingClientRect();

  if (isColliding2(div1Bound, div2Bound)) {
    gun.style.display="none"
    shiny.style.display="none"
    f.style.display="block"
    gunItem.style.display="block"
  }
}

// Call checkCollision() whenever you need to check for collision (e.g., on animation frames)
// Example: Check every 100ms
setInterval(checkCollision2, 100);

// Or, if you want to check on specific events (e.g., mousemove)
// d4HitboxElement.addEventListener('mousemove', checkCollision);
// gunElement.addEventListener('mousemove', checkCollision);







let currentAmmo = 0;

function ammoRefill(){
  currentAmmo += 2
}


f.addEventListener("click", function (event){
  event.stopPropagation()
  currentAmmo--;
  if (currentAmmo < 1) {
    console.log("NO AMMO");
    f.style.display="none"
setTimeout(()=>{
    gunItem.style.display="none"
},300)
    //gunItemRemove()
  }
  if(currentAmmo > 1){
    console.log("AMMO REFILLED")
  }
/*
let ammoPistol = 5;
ammoPistol -= 1
if (ammoPistol < 0){
  gunItemRemove()
  gunFunc()
  gunItemRemoveBack()
  ammoPistol+=5
  console.log("NO AMMO")
}
*/
explode.classList.add("show")
gunItem.classList.add("fire")
setTimeout(()=>{
  gunItem.classList.remove("fire")
  explode.classList.remove("show")
},500)
  ''
  // Create a new bullet element
  let newBullet = document.createElement("div");
  newBullet.classList.add("bullet");

  // Set the initial position of the bullet (based on gunItem or d4Hitbox)
  let gunRect = gunItem.getBoundingClientRect();
  newBullet.style.position = "absolute";
  newBullet.style.left = gunRect.left + 80 + "px"; // start a bit to the right of gun
  newBullet.style.top = gunRect.top + 30 + "px";
  newBullet.style.width = "30px";
  newBullet.style.height = "10px";
  newBullet.style.background = "white";
  newBullet.style.border = "3px solid whitesmoke";
  newBullet.style.zIndex = 3;

  document.body.appendChild(newBullet);

  // Animate the bullet moving to the right
let bulletInterval = setInterval(() => {
    let left = parseInt(newBullet.style.left);
    newBullet.style.left = (left + 10) + "px";

    // Remove bullet if off screen
    if (left > window.innerWidth) {
      
      newBullet.remove();
    }
  }, 10);

  // Play shot sound
  pistolShot.currentTime = 0;
  pistolShot.play();
});



let bulletInterval;



function checkCollision3() {
    const enemies = document.querySelectorAll(".enemyClone");
    const bullets = document.querySelectorAll(".bullet");

    bullets.forEach(bullet => {
        const bulletRect = bullet.getBoundingClientRect();

        enemies.forEach(enemy => {
            const enemyRect = enemy.getBoundingClientRect();

            // Collision detection with enemies
            if (
                bulletRect.left < enemyRect.right &&
                bulletRect.right > enemyRect.left &&
                bulletRect.top < enemyRect.bottom &&
                bulletRect.bottom > enemyRect.top
            ) {
                console.log("enemy killed");
                bullet.remove();
                enemy.remove();
            }
        });

        // Get e2's bounding rectangle *inside* the loop for each bullet.
        const h2 = e2.getBoundingClientRect(); // Get e2's position *here*

        // Collision detection with e2
        if (
            bulletRect.left < h2.right &&
            bulletRect.right > h2.left &&
            bulletRect.top < h2.bottom &&
            bulletRect.bottom > h2.top
        ) {
            e2.style.display="none"
            gunE.style.display="none"
            


    
    
        }
    });
}

setInterval(checkCollision3, 50);







//ROCKS
let isStopped = false;

function createRock() {
  const rock = document.createElement("div");
  rock.className = "rock";
  rock.style.top = (Math.random() * 300 + 300) + "px";
  rock.style.left = window.innerWidth + "px";
  document.body.appendChild(rock);

  const pattern = [
    "0110",
    "1111",
    "1111",
    "0110"
  ];

  for (let row of pattern) {
    for (let char of row) {
      const pixel = document.createElement("div");
      pixel.className = "rock-pixel" + (char === "0" ? " transparent" : "");
      rock.appendChild(pixel);
    }
  }

  let left = window.innerWidth;

  function moveRock() {
    if (isStopped) return; // STOP here if global flag is set
    left -= 6;
    rock.style.left = left + "px";
    if (left > -60) {
      requestAnimationFrame(moveRock);
    } else {
      rock.remove();
    }
  }

  moveRock();
}



// Spawn rocks repeatedly
const intervalId = setInterval(() => {
  createRock();
}, 1000);

// Start with 3 rocks instantly
createRock();
setTimeout(createRock, 500);
setTimeout(createRock, 1000);






function starFunc(){
setTimeout(()=>{
function createStar(container) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.textContent = '★'; // Add star character

star.classList.add("show")

  const containerRect = container.getBoundingClientRect();
  const maxX = containerRect.width - 20; //Subtract star width(approximate)
  const maxY = containerRect.height - 20; //Subtract star height(approximate)

  star.style.left = Math.floor(Math.random() * maxX) + 'px';
  star.style.top = Math.floor(Math.random() * maxY) + 'px';
  container.appendChild(star);
}

const container = document.body; //Use document.body as container
for (let i = 0; i < 20; i++) {
  createStar(container);
  }
},40000);
}



/*
function jumpMusic(){
      jeffS2.play()
    }
    
function jumpMusic2(){
      
    }
    
function jumpMusic3(){
      setTimeout(()=>{
      jorossS2.play()
      },112000);
    }
    
function jumpMusic4(){
      setTimeout(()=>{
      jebS2.play()
      },draw150000)
    }
*/










function shieldFunc(){
setInterval(()=>{
let shieldMath = Math.random()
console.log(shieldMath + " shield")
if (shieldMath < shieldMathChance){
  shield.style.display="block"
  shiny2.style.display="block"
  shield.classList.add("give")
  shiny2.classList.add("give")


  shieldAgain()

  
}
},4000);
}

function shieldDefault(){
  shield.style.left="360px"
  shiny2.style.left="360px"
  shield.style.display="block"
  shiny2.style.display="block"
}

function shieldAgain(){
  shield.classList.add("give2")
}

function checkCollision4() {
let div1BoundShield = d4HitboxElement.getBoundingClientRect();
  let div2BoundShield = shield.getBoundingClientRect();



  if (isColliding4(div1BoundShield, div2BoundShield)) {
    shield.style.display="none"
    shiny2.style.display="none"
    shieldItem.style.display="block"
    
  }



  
}

function isColliding4(d4Hitbox, shield) {
  return !(
    d4Hitbox.left > shield.right ||
    d4Hitbox.right < shield.left ||
    d4Hitbox.top > shield.bottom ||
    d4Hitbox.bottom < shield.top
  );
}




setInterval(checkCollision4, 100);




/*
setInterval(()=>{
enemies.remove()
},1000);
*/















/*
function checkCollision5() {
  
  const enemies = document.querySelectorAll(".enemyClone");
  const shieldItems = document.querySelectorAll(".shieldItem");

  shieldItems.forEach(shieldItem => {
    const shieldItemRect = shieldItem.getBoundingClientRect();

    enemies.forEach(enemy => {
      const enemyRect = enemy.getBoundingClientRect();

      if (
        shieldItemRect.left < enemyRect.right &&
        shieldItemRect.right > enemyRect.left &&
        shieldItemRect.top < enemyRect.bottom &&
        shieldItemRect.bottom > enemyRect.top
      ) {
        alert("enemy killed")
        shieldItem.remove();
        enemy.remove();
      }
    });
  });
}


setInterval(checkCollision5, 50);

*/

function checkShieldCollision() {
  let shield = document.getElementById("shieldItem");
  let enemies = document.querySelectorAll(".enemyClone");
  let shieldRect = shield.getBoundingClientRect();

  enemies.forEach(enemy => {
    let enemyRect = enemy.getBoundingClientRect();


/*
shieldRect.width *= 0.8;  // Reduce HITBOX width by 20%
shieldRect.height *= 0.8; // Reduce HITBOX height by 20%
*/


    if (
      shieldRect.right > enemyRect.left &&
      shieldRect.left < enemyRect.right &&
      shieldRect.bottom > enemyRect.top &&
      shieldRect.top < enemyRect.bottom
    ) {
      enemy.remove(); // Removes that specific enemy
      toolBreak.play()
      shieldItem.style.display="none"
    }
  });
}

setInterval(checkShieldCollision, 50); // Run it continuously


let bulletESpawnChance;
function continueE2Interval(){
bulletInterval = setInterval(()=>{
bulletESpawnChance = Math.random()
},3000)
}



let gunEInterval;

function e2SpawnTime(){
let gunMove = 0;
let newBullerRightPx = 370;


gunEInterval = setInterval(()=>{
let gunEMath = Math.random()
//AKONG BULLET

  





if (gunEMath > 0.1){
continueE2Interval()
e2.style.display="block"
gunE.style.display="block"


 gunE.classList.add("Go")
 e2.classList.add("Go")
 explodeE.classList.add("Go")
}




if(bulletESpawnChance < 0.6){

setTimeout(()=>{
//Pabuto



gunE.classList.add("fire")
  explodeE.classList.add("show")
  pistolShot.play()
  

let newBulletE = document.createElement("div");
newBulletE.classList.add("bulletE")


// Create a new bullet element
//HIS IS THE IMPORTANT FOR COLLISION PART 1


//THIS IS THE IMPORTANT FOR COLLISION PART 2


// Set the initial position of the bullet (based on gunItem or d4Hitbox).  Note the use of `right` instead of `left`.
let gunRectE = gunE.getBoundingClientRect();
newBulletE.style.position = "absolute";
newBulletE.style.right = gunRectE.right - newBullerRightPx + "px"; // Start a bit to the left of the gun.  We use gunRectE.right to get the right edge and subtract to move left.

newBulletE.style.top = gunRectE.top + 23 + "px";
newBulletE.style.width = "15px";
newBulletE.style.height = "5px";
newBulletE.style.background = "red";
newBulletE.style.border = "3px solid whitesmoke";
newBulletE.style.zIndex = 10;

document.body.appendChild(newBulletE);

// Animate the bullet moving to the left
setInterval(() => {
    let rightE = parseInt(newBulletE.style.right); // Get the right position
    newBulletE.style.right = (rightE + 5) + "px"; // Increment right to move left

    // Remove bullet if off screen
    if (rightE > window.innerWidth) { // Check if it's off-screen to the left (right value will be large)
       
        newBulletE.remove();
    }
}, 15.5);
  
  
setTimeout(()=>{
  gunE.classList.remove("fire")
  explodeE.classList.remove("show")
},500)


},2000);
}




},7000);

}


function checkCollisionBulletE() {
  if (collisionHappened) return;

  let hb = d4Hitbox.getBoundingClientRect();
  const bulletsE = document.querySelectorAll(".bulletE");
  
  let shield = document.getElementById("shieldItem");
  let shieldRect = shield.getBoundingClientRect();
  


bulletsE.forEach(bulletE => {
    const bulletRectE = bulletE.getBoundingClientRect();

if (
      shieldRect.right > bulletRectE.left &&
      shieldRect.left < bulletRectE.right &&
      shieldRect.bottom > bulletRectE.top &&
      shieldRect.top < bulletRectE.bottom
    ) {
      bulletE.remove()
      shieldItem.style.display="none"
      clearInterval(bulletInterval)
    }
});
  

  
  
  
  
  
  
  bulletsE.forEach(bulletE => {
    const bulletRectE = bulletE.getBoundingClientRect();




    
      if (
        bulletRectE.left < hb.right &&
        bulletRectE.right > hb.left &&
        bulletRectE.top < hb.bottom &&
        bulletRectE.bottom > hb.top
      ) {
        
        bulletE.remove()
        
        
killed.play()
      blood.style.opacity="1"
      d1.classList.add("die")
      d2.classList.add("die")
      d3.classList.add("die")
      d4.classList.add("die")
      
      jakeS.pause()
      jebS.pause()
      jorossS.pause()
      jeffS.pause()
      jakeS2.pause()
      jebS2.pause()
      jorossS2.pause()
      jebS2.pause()  
  
ePic.classList.add("show2");
      setTimeout(() => {
        ePic.classList.add("show");
      }, 300);
      collisionMessage.style.display = "block";
      jumpscare.play();
      collisionHappened = true;
      clearInterval(collisionInterval);
  
      }


  });
  
  
  
  
}


setInterval(checkCollisionBulletE, 50);


function bootsStartSpawn(){
setInterval(()=>{
let bootsMath = Math.random()
if (bootsMath < 0.08){
  boots.style.display="block"
  shiny3.style.display="block"
  boots.classList.add("give")
  shiny3.classList.add("give")


  bootsAgain()

  
}
},4000);
}

function shieldDefault(){
  boots.style.left="360px"
  shiny3.style.left="360px"
  boots.style.display="block"
  shiny3.style.display="block"
}

function bootsAgain(){
  boots.classList.add("give2")
}





let jumpRemaining = 0;
function checkCollision6() {
let div1BoundBoots = d4HitboxElement.getBoundingClientRect();
  let div2BoundBoots = boots.getBoundingClientRect();



  if (isColliding5(div1BoundBoots, div2BoundBoots)) {
    boots.style.display="none"
    shiny3.style.display="none"
    bootsItem.style.display="block"
    bootsItem2.style.display="block"
    j.style.display="block"
    
    jumpRemaining = 2
  }



  
}

function isColliding5(d4Hitbox, boots) {
  return !(
    d4Hitbox.left > boots.right ||
    d4Hitbox.right < boots.left ||
    d4Hitbox.top > boots.bottom ||
    d4Hitbox.bottom < boots.top
  );
}


setInterval(checkCollision6, 100);




j.addEventListener("click", function (event){
event.stopPropagation()


if (isJumpingBoots) return;
  isJumpingBoots = true;
  bootsItem.classList.add("jumpSuper")
  bootsItem2.classList.add("jumpSuper")
  d4Hitbox.classList.add("jumpSuper")
  d1.classList.add("jumpSuper")
  d2.classList.add("jumpSuper")
  d3.classList.add("jumpSuper")
  d4.classList.add("jumpSuper")
  gunItem.classList.add("jumpSuper")
  shieldItem.classList.add("jumpSuper")
  
  jumpRemaining-=1
  
 console.log(jumpRemaining) 


if(jumpRemaining >= 2){
  bootsItem2.style.display="block"
  bootsItem.style.display="block"
}

if(jumpRemaining == 1){
  bootsItem2.style.display="none"
}

if(jumpRemaining == 0){
  bootsItem2.style.display="none"
  bootsItem.style.display="none"
  j.style.display="none"
}  
  
  setTimeout(() => {
  bootsItem.classList.remove("jumpSuper")
  bootsItem2.classList.remove("jumpSuper")
    d4Hitbox.classList.remove("jumpSuper")
  d1.classList.remove("jumpSuper")
  d2.classList.remove("jumpSuper")
  d3.classList.remove("jumpSuper")
  d4.classList.remove("jumpSuper")
  gunItem.classList.remove("jumpSuper")
    shieldItem.classList.remove("jumpSuper")
    bootsItem.classList.remove("jumpSuper")
    bootsItem2.classList.remove("jumpSuper")
  
  
    isJumpingBoots = false
    ;
  }, 1000);

})




jSq.addEventListener('click', function(){
credShow.style.display="block"
})

xButton.addEventListener('click',function(){
  credShow.style.display="none"
})
  
  
  function disaper(){
  disappear.style.display="none"
}


let credClue = document.getElementById("credClue")
credClue.addEventListener('click',function(){
  credChatBox.classList.add("credChatBoxShow")
  codeIns.style.color="green"
  codeIns.style.opacity="1"
})


credEnter.addEventListener('click',function(){
let credInputJs = credInput.value
if(credInputJs == 444){
  window.location.href="creditsDino.html"
}
else{
  incorrectCred.style.opacity="1"
setTimeout(()=>{
incorrectCred.style.opacity="0"
incorrectCred.style.transition="2s"
},1000)
}
})


xButton.addEventListener('click', () => click.play());
credClue.addEventListener('click', () => click.play());
credEnter.addEventListener('click', () => click.play());
jSq.addEventListener('click', () => click.play());




























function boss1P2Func(){
let bulletSpawnTime = 3000;
setTimeout(()=>{
bulletSpawnTime = 15000;  
},15000)
boss1P2()
let newBullerRightPx = 200;

function boss1P2() {
hpDisplay.style.display="none"
bossHp.style.display="none"
hpDisplay2.style.display="block"
bossHp2.style.display="block"
  setInterval(() => {
    gunBoss.classList.add("fire");
    explodeBoss.classList.add("show");
    pistolShot.play();

    let newBulletBoss = document.createElement("div");
    newBulletBoss.classList.add("bulletEBoss");

    let gunRectBoss = gunBoss.getBoundingClientRect();
    newBulletBoss.style.position = "absolute";
    newBulletBoss.style.right = gunRectBoss.right - newBullerRightPx + "px";
    newBulletBoss.style.top = gunRectBoss.top + "px"; // ✅ Fixed here
    newBulletBoss.style.width = "15px";
    newBulletBoss.style.height = "5px";
    newBulletBoss.style.background = "red";
    newBulletBoss.style.border = "3px solid whitesmoke";
    newBulletBoss.style.zIndex = 10;

    document.body.appendChild(newBulletBoss);

    // Animate bullet moving left (by increasing `right`)
    let interval = setInterval(() => {
      let rightE = parseInt(newBulletBoss.style.right);
      newBulletBoss.style.right = (rightE + 5) + "px";

      if (rightE > window.innerWidth) {
        newBulletBoss.remove();
        clearInterval(interval); // ✅ Don't forget to stop the interval
      }
    }, 15.5);

    setTimeout(() => {
      gunBoss.classList.remove("fire");
      explodeBoss.classList.remove("show");
    }, 500);
  }, bulletSpawnTime);
}


setTimeout(()=>{
gunBoss.classList.add("UpDown1")
explodeBoss.classList.add("move1")

setTimeout(()=>{
gunBoss.classList.add("UpDown2")
explodeBoss.classList.add("move2")
setTimeout(()=>{
gunBoss.classList.add("UpDown3")
explodeBoss.classList.add("move3")
setTimeout(()=>{
gunBoss.classList.add("UpDown4")
explodeBoss.classList.add("move4")
setTimeout(()=>{
gunBoss.classList.add("UpDown5")
explodeBoss.classList.add("move5")
newBullerRightPx = 235;

},1000)
},5000)
},7000)
},5000)
},2000)

setTimeout(()=>{
gunBoss.classList.remove("UpDown1")
explodeBoss.classList.remove("move1")
setTimeout(()=>{
gunBoss.classList.remove("UpDown2")
explodeBoss.classList.remove("move2")
setTimeout(()=>{
gunBoss.classList.remove("UpDown3")
explodeBoss.classList.remove("move3")
},8000)
},6000)
},4000)






let newBullerRightPx2 = 300;
boss1P2SECOND()
function boss1P2SECOND() {
  setInterval(() => {
    gunBoss2.classList.add("fire");
    explodeBoss2.classList.add("show");
    pistolShot.play();

    let newBulletBoss2 = document.createElement("div");
    newBulletBoss2.classList.add("bulletEBoss2");

    let gunRectBoss2 = gunBoss2.getBoundingClientRect();
    newBulletBoss2.style.position = "absolute";
    newBulletBoss2.style.right = gunRectBoss2.right - newBullerRightPx2 + "px";
    newBulletBoss2.style.top = gunRectBoss2.top + "px"; // ✅ Fixed here
    newBulletBoss2.style.width = "15px";
    newBulletBoss2.style.height = "5px";
    newBulletBoss2.style.background = "red";
    newBulletBoss2.style.border = "3px solid whitesmoke";
    newBulletBoss2.style.zIndex = 10;

    document.body.appendChild(newBulletBoss2);

    // Animate bullet moving left (by increasing `right`)
    let interval = setInterval(() => {
      let rightE = parseInt(newBulletBoss2.style.right);
      newBulletBoss2.style.right = (rightE + 5) + "px";

      if (rightE > window.innerWidth) {
        newBulletBoss2.remove();
        clearInterval(interval); // ✅ Don't forget to stop the interval
      }
    }, 15.5);

    setTimeout(() => {
      gunBoss2.classList.remove("fire");
      explodeBoss2.classList.remove("show");
    }, 500);
  }, 3300);
}


setInterval(()=>{
setTimeout(()=>{
gunBoss2.classList.add("UpDown11")
explodeBoss2.classList.add("move11")
setTimeout(()=>{
gunBoss2.classList.add("UpDown22")
explodeBoss2.classList.add("move22")
setTimeout(()=>{
gunBoss2.classList.add("UpDown33")
explodeBoss2.classList.add("move33")
setTimeout(()=>{
gunBoss2.classList.add("UpDown44")
explodeBoss2.classList.add("move44")
},5000)
},8000)
},6000)
},2000)

setTimeout(()=>{
gunBoss2.classList.remove("UpDown11")
explodeBoss2.classList.remove("move11")
setTimeout(()=>{
gunBoss2.classList.remove("UpDown22")
explodeBoss2.classList.remove("move22")
setTimeout(()=>{
gunBoss2.classList.remove("UpDown33")
explodeBoss2.classList.remove("move33")
},9000)
},7000)
},5000)
},14000)








function checkCollisionBulletEBoss() {
  if (collisionHappened) return;

  let hb = d4Hitbox.getBoundingClientRect();
  const bulletsEBoss = document.querySelectorAll(".bulletEBoss");
  
  let shield = document.getElementById("shieldItem");
  let shieldRect = shield.getBoundingClientRect();
  


bulletsEBoss.forEach(bulletEBoss => {
    const bulletRectEBoss = bulletEBoss.getBoundingClientRect();

if (
      shieldRect.right > bulletRectEBoss.left &&
      shieldRect.left < bulletRectEBoss.right &&
      shieldRect.bottom > bulletRectEBoss.top &&
      shieldRect.top < bulletRectEBoss.bottom
    ) {
      bulletEBoss.remove()
      shieldItem.style.display="none"
      clearInterval(bulletInterval)
    }
});
  

  
  
  
  
  
  
  bulletsEBoss.forEach(bulletEBoss => {
    const bulletRectEBoss = bulletEBoss.getBoundingClientRect();




    
      if (
        bulletRectEBoss.left < hb.right &&
        bulletRectEBoss.right > hb.left &&
        bulletRectEBoss.top < hb.bottom &&
        bulletRectEBoss.bottom > hb.top
      ) {
        
        bulletEBoss.remove()
        
        
killed.play()
      blood.style.opacity="1"
      d1.classList.add("die")
      d2.classList.add("die")
      d3.classList.add("die")
      d4.classList.add("die")
      
      jakeS.pause()
      jebS.pause()
      jorossS.pause()
      jeffS.pause()
      jakeS2.pause()
      jebS2.pause()
      jorossS2.pause()
      jebS2.pause()  
  
ePic.classList.add("show2");
      setTimeout(() => {
        ePic.classList.add("show");
      }, 300);
      collisionMessage.style.display = "block";
      jumpscare.play();
      collisionHappened = true;
      clearInterval(collisionInterval);
  
      }


  });
  
  
  
  
}


setInterval(checkCollisionBulletEBoss, 50);









function checkCollisionBulletEBoss2() {
  if (collisionHappened) return;

  let hb = d4Hitbox.getBoundingClientRect();
  const bulletsEBoss2 = document.querySelectorAll(".bulletEBoss2");
  
  let shield = document.getElementById("shieldItem");
  let shieldRect = shield.getBoundingClientRect();
  


bulletsEBoss2.forEach(bulletEBoss2 => {
    const bulletRectEBoss2 = bulletEBoss2.getBoundingClientRect();

if (
      shieldRect.right > bulletRectEBoss2.left &&
      shieldRect.left < bulletRectEBoss2.right &&
      shieldRect.bottom > bulletRectEBoss2.top &&
      shieldRect.top < bulletRectEBoss2.bottom
    ) {
      bulletEBoss2.remove()
      shieldItem.style.display="none"
      clearInterval(bulletInterval)
    }
});
  

  
  
  
  
  
  
  bulletsEBoss2.forEach(bulletEBoss2 => {
    const bulletRectEBoss2 = bulletEBoss2.getBoundingClientRect();




    
      if (
        bulletRectEBoss2.left < hb.right &&
        bulletRectEBoss2.right > hb.left &&
        bulletRectEBoss2.top < hb.bottom &&
        bulletRectEBoss2.bottom > hb.top
      ) {
        
        bulletEBoss2.remove()
        
        
killed.play()
      blood.style.opacity="1"
      d1.classList.add("die")
      d2.classList.add("die")
      d3.classList.add("die")
      d4.classList.add("die")
      
      jakeS.pause()
      jebS.pause()
      jorossS.pause()
      jeffS.pause()
      jakeS2.pause()
      jebS2.pause()
      jorossS2.pause()
      jebS2.pause()  
  
ePic.classList.add("show2");
      setTimeout(() => {
        ePic.classList.add("show");
      }, 300);
      collisionMessage.style.display = "block";
      jumpscare.play();
      collisionHappened = true;
      clearInterval(collisionInterval);
  
      }


  });
  
  
  
  
}


setInterval(checkCollisionBulletEBoss2, 50);












}




const hpHearts = document.getElementById('hp-hearts');
const reduceHpButton = document.getElementById('reduce-hp');
let currentHp = 3;

function updateHpDisplay() {
  let hearts = '';
  for (let i = 0; i < currentHp; i++) {
    hearts += '♥ ';
  }
  hpHearts.textContent = hearts;

  if (currentHp <= 0) {
  
    }
  
}



setTimeout(()=>{

window.location.href = "unfinished.html";


},315000)



setTimeout(()=>{
invBtn.style.display="block"
invBtn.addEventListener('click', function(){
      jakeS2.play()
      invBtn.style.display="none"
})
},230000)



setTimeout(()=>{
clearInterval(spawnerTime)
},295000)