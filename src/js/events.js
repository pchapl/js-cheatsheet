// Пример с ссылками
const linkElement = document.querySelector('#custom')
const resultElement = document.querySelector('#slitherresult')

linkElement.addEventListener('click', function (event) {
    event.preventDefault()
    
    resultElement.innerText = 'Вы нажали на ссылку, но ничего не произошло!'
    setTimeout(function () {
        resultElement.innerText = ''
    }, 2500)
})

// -----Блок fluid-----

var MOUSE_INFLUENCE = 5,
GRAVITY_X     = 0,
GRAVITY_Y     = 0,
MOUSE_REPEL   = false,
GROUPS        = [50,50,50],
GROUP_COLOURS = ['rgba(97,160,232'];

window.requestAnimFrame =
window.requestAnimationFrame       || 
window.webkitRequestAnimationFrame || 
window.mozRequestAnimationFrame    || 
window.oRequestAnimationFrame      || 
window.msRequestAnimationFrame     ||
function( callback ){
    window.setTimeout(callback, 1000 / 60);
};

var fluid = function() {
    
    var ctx, width, height, num_x, num_y, particles, grid, meta_ctx, threshold = 220, play = false, spacing = 45, radius = 30, limit = radius * 0.66, textures, num_particles;
    
    var mouse = {
        down: false,
        x: 0,
        y: 0
    };
    
    var process_image = function() {
        var imageData = meta_ctx.getImageData(0, 0, width, height),
        pix = imageData.data;
        
        for (var i = 0, n = pix.length; i < n; i += 4) {
            (pix[i + 3] < threshold) && (pix[i + 3] /= 6);
        }
        
        ctx.putImageData(imageData, 0, 0);
    };
    
    var run = function () {
        
        //var time = new Date().getTime();
        meta_ctx.clearRect(0, 0, width, height);
        
        for (var i = 0, l = num_x * num_y; i < l; i++) grid[i].length = 0;
        
        
        var i = num_particles;
        while(i--) particles[i].first_process();
        i = num_particles;
        while(i--) particles[i].second_process();
        
        process_image();
        
        if(mouse.down) {
            
            ctx.canvas.style.cursor = 'none';
            
            ctx.fillStyle = 'rgba(97, 160, 232, 0.05)';
            ctx.beginPath();
            ctx.arc(
                mouse.x,
                mouse.y,
                radius * MOUSE_INFLUENCE,
                0,
                Math.PI * 2
                );
                ctx.closePath();
                ctx.fill();
                
                ctx.fillStyle = 'rgba(97, 160, 232, 0.05)';
                ctx.beginPath();
                ctx.arc(
                    mouse.x,
                    mouse.y,
                    (radius * MOUSE_INFLUENCE)/3,
                    0,
                    Math.PI * 2
                    );
                    ctx.closePath();
                    ctx.fill();
                } else ctx.canvas.style.cursor = 'default';
                
                if(play)
                requestAnimFrame(run);
            };
            
            var Particle = function (type, x, y) {
                this.type = type;
                this.x = x;
                this.y = y;
                this.px = x;
                this.py = y;
                this.vx = 0;
                this.vy = 0;
            };
            
            Particle.prototype.first_process = function () {
                
                var g = grid[Math.round(this.y / spacing) * num_x + Math.round(this.x / spacing)];
                
                if (g) g.close[g.length++] = this;
                
                this.vx = this.x - this.px;
                this.vy = this.y - this.py;
                
                if (mouse.down) {
                    var dist_x = this.x - mouse.x;
                    var dist_y = this.y - mouse.y;
                    var dist = Math.sqrt(dist_x * dist_x + dist_y * dist_y);
                    if (dist < radius * MOUSE_INFLUENCE) {
                        var cos = dist_x / dist;
                        var sin = dist_y / dist;
                        this.vx += (MOUSE_REPEL) ? cos : -cos;
                        this.vy += (MOUSE_REPEL) ? sin : -sin;
                    }
                }
                
                this.vx += GRAVITY_X;
                this.vy += GRAVITY_Y;
                this.px = this.x;
                this.py = this.y;
                this.x += this.vx;
                this.y += this.vy;
            };
            
            Particle.prototype.second_process = function () {
                
                var force = 0,
                force_b = 0,
                cell_x = Math.round(this.x / spacing),
                cell_y = Math.round(this.y / spacing),
                close = [];
                
                for (var x_off = -1; x_off < 2; x_off++) {
                    for (var y_off = -1; y_off < 2; y_off++) {
                        var cell = grid[(cell_y + y_off) * num_x + (cell_x + x_off)];
                        if (cell && cell.length) {
                            for (var a = 0, l = cell.length; a < l; a++) {
                                var particle = cell.close[a];
                                if (particle != this) {
                                    var dfx = particle.x - this.x;
                                    var dfy = particle.y - this.y;
                                    var distance = Math.sqrt(dfx * dfx + dfy * dfy);
                                    if (distance < spacing) {
                                        var m = 1 - (distance / spacing);
                                        force += Math.pow(m, 2);
                                        force_b += Math.pow(m, 3) / 2;
                                        particle.m = m;
                                        particle.dfx = (dfx / distance) * m;
                                        particle.dfy = (dfy / distance) * m;
                                        close.push(particle);
                                    }
                                }
                            }
                        }
                    }
                }
                
                force = (force - 3) * 0.5;
                
                for (var i = 0, l = close.length; i < l; i++) {
                    
                    var neighbor = close[i];
                    
                    var press = force + force_b * neighbor.m;
                    if (this.type != neighbor.type) press *= 0.35;
                    
                    var dx = neighbor.dfx * press * 0.5;
                    var dy = neighbor.dfy * press * 0.5;
                    
                    neighbor.x += dx;
                    neighbor.y += dy;
                    this.x -= dx;
                    this.y -= dy;
                }
                
                if (this.x < limit) this.x = limit;
                else if (this.x > width - limit) this.x = width - limit;
                
                if (this.y < limit) this.y = limit;
                else if (this.y > height - limit) this.y = height - limit;
                
                this.draw();
            };
            
            Particle.prototype.draw = function () {
                
                var size = radius * 2;
                
                meta_ctx.drawImage(
                    textures[this.type],
                    this.x - radius,
                    this.y - radius,
                    size,
                    size);
                };
                
                return {
                    
                    init: function(canvas, w, h) {
                        
                        particles = [];
                        grid      = [];
                        close = [];
                        textures  = [];
                        
                        var canvas 	  = document.getElementById(canvas);
                        ctx   	      = canvas.getContext('2d');
                        canvas.height = h || window.innerHeight;
                        canvas.width  = w || window.innerWidth;
                        width         = canvas.width;
                        height        = canvas.height;
                        
                        var meta_canvas    = document.createElement("canvas");
                        meta_canvas.width  = width;
                        meta_canvas.height = height;
                        meta_ctx           = meta_canvas.getContext("2d");
                        
                        for(var i = 0; i < GROUPS.length; i++) {
                            
                            var colour;
                            
                            if(GROUP_COLOURS[i]) {
                                colour = GROUP_COLOURS[i];
                            } else {
                                
                                colour =
                                'hsla(' + Math.round(Math.random() * 360) + ', 80%, 60%';
                            }
                            
                            textures[i] = document.createElement("canvas");
                            textures[i].width  = radius * 2;
                            textures[i].height = radius * 2;
                            var nctx = textures[i].getContext("2d");
                            
                            var grad = nctx.createRadialGradient(
                                radius,
                                radius,
                                1,
                                radius,
                                radius,
                                radius
                                );
                                
                                grad.addColorStop(0, colour + ',1)');
                                grad.addColorStop(1, colour + ',0)');
                                nctx.fillStyle = grad;
                                nctx.beginPath();
                                nctx.arc(radius, radius, radius, 0, Math.PI * 2, true);
                                nctx.closePath();
                                nctx.fill();
                            }
                            
                            canvas.onmousedown = function(e) {
                                mouse.down = true;
                                return false;
                            };
                            
                            canvas.onmouseup = function(e) {
                                mouse.down = false;
                                return false;
                            };
                            
                            canvas.onmousemove = function(e) {
                                var rect = canvas.getBoundingClientRect();
                                mouse.x = e.clientX - rect.left;
                                mouse.y = e.clientY - rect.top;
                                return false;
                            };
                            
                            num_x = Math.round(width / spacing) + 1;
                            num_y = Math.round(height / spacing) + 1;
                            
                            for (var i = 0; i < num_x * num_y; i++) {
                                grid[i] = {
                                    length: 0,
                                    close: []
                                }
                            }
                            
                            for (var i = 0; i < GROUPS.length; i++ ) {
                                for (var k = 0; k < GROUPS[i]; k++ ) {
                                    particles.push(
                                        new Particle(
                                            i,
                                            radius + Math.random() * (width - radius * 2),
                                            radius + Math.random() * (height - radius * 2)
                                            )
                                            );
                                        }
                                    }
                                    
                                    num_particles = particles.length
                                    
                                    play = true;
                                    run();
                                },
                                
                                stop: function() {
                                    play = false;
                                }
                                
                            };
                            
                        }();
                        
                        fluid.init('events_fluid_c', 800, 376);
                        
                        document.getElementById('events_fluid_reset').onclick = function() {
                            fluid.stop();
                            setTimeout(function(){fluid.init('events_fluid_c', 800, 366)}, 100);
                        }
// ---------------------------------Конец блока fluid---------------------------------------------
                        
                        
// -----------------------------------Блок confetti-----------------------------------------------
                        
const confettiBtn = document.querySelector('#events_confetti_btn');
                        
confettiBtn.addEventListener('mousedown', confettiStart);
confettiBtn.addEventListener('mouseup', confettiEnd);
var a = document.querySelectorAll('p.events_confetti_an');
var b = document.querySelectorAll('div.events_confetti_an');

function confettiStart (event) {

    a.forEach(yesdisplay);
    b.forEach(yesdisplay);
    function yesdisplay (item) {
        item.style.display = 'inline-block'
    }

a = Array.prototype.slice.call(a);
b = Array.prototype.slice.call(b);
                            
a.forEach(function(el, i, ra) {
    var to = {
        x: Math.random() * (i % 2 === 0 ?-11 : 11),
        y: Math.random() * 12
    }
                                
    el.animate([
        { transform: 'translate(0,0) scale(1)', opacity: 1 },
        { transform: 'translate('+to.x+'rem,'+to.y+'rem) scale('+Math.random()+')', opacity: Math.random() }
    ], {
        duration: (Math.random() + 1) * 2000,
        direction: 'alternate',
        fill: 'forwards',
        iterations: Infinity,
        easing: 'ease-in-out',
        delay: 0
    });
});
                            
var width = (window.innerWidth || 300)/2;
var height = window.innerHeight || 300;
b.forEach(function(el, i, ra) {
    var translate = (Math.random()*width*(i%2 == 0 ? -1 : 1)) +'px,' + (Math.random()*height);
    el.animate([
            { transform: 'scale(0) translate(0)' },
            {transform: 'scale(1)  translate(' + translate + 'px)'}
        ], {
            duration: 10000,
            fill: 'both',
            easing: 'ease-out'
        });
    });
}

function confettiEnd (event) {
    a.forEach(nodisplay);
    b.forEach(nodisplay);
    function nodisplay (item) {
        item.style.display = 'none'
    }
}
// ----------------------------------Конец блока confetti----------------------------------------------


// ---------------------------------------Блок keys----------------------------------------------------

window.addEventListener('load', function() {
    
    ['keydown', 'keypress', 'keyup'].forEach(function(event) {
        document.getElementById('keyInput').addEventListener(event, function(event){
            document.getElementById('keyInput').value = '';
            if (event.repeat == false) {
                if (event.type == 'keyup') {
                    document.getElementById('keyInfo_keyup_1').innerHTML = event.key;
                    document.getElementById('keyInfo_keyup_2').innerHTML = event.keyCode;
                    document.getElementById('keyInfo_keyup_3').innerHTML = event.code;
                    document.getElementById('keyInfo_keyup_4').innerHTML = event.charCode;
                    
                    document.getElementById('keyInfo_keyup').classList.add("key-color");
                    setTimeout(function(){ document.getElementById('keyInfo_keyup').classList.remove("key-color"); }, 300);
                    setTimeout(function(){ 
                        document.getElementById('keyInfo_keydown').classList.remove("key-color");
                        document.getElementById('keyInfo_keypress').classList.remove("key-color");
                    }, 100);

                }
                
                if (event.type == 'keydown') {
                    document.getElementById('keyInfo_keydown_1').innerHTML = event.key;
                    document.getElementById('keyInfo_keydown_2').innerHTML = event.keyCode;
                    document.getElementById('keyInfo_keydown_3').innerHTML = event.code;
                    document.getElementById('keyInfo_keydown_4').innerHTML = event.charCode;

                    document.getElementById('keyInfo_keydown').classList.add("key-color");
                }
                
                if (event.type == 'keypress') {
                    document.getElementById('keyInfo_keypress_1').innerHTML = event.key;
                    document.getElementById('keyInfo_keypress_2').innerHTML = event.keyCode;
                    document.getElementById('keyInfo_keypress_3').innerHTML = event.code;
                    document.getElementById('keyInfo_keypress_4').innerHTML = event.charCode;
                    
                    setTimeout(function() {document.getElementById('keyInfo_keypress').classList.add("key-color"); }, 100);
                }
            }
        });
    });
});
// -------------------------------------Конец блока keys----------------------------------------------
