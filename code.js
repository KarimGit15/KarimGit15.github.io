let color = "black"
red_box = document.querySelector(".red")
blue_box = document.querySelector(".blue")
yellow_box = document.querySelector(".yellow")
green_box = document.querySelector(".green")
turq_box = document.querySelector(".turq")
orange_box = document.querySelector(".orange")
black_box = document.querySelector(".black")
white_box = document.querySelector(".white")
pink_box = document.querySelector(".pink")
eraser = document.querySelector(".eraser") // Ластик
basket = document.querySelector(".basket") // Корзина
fill = document.querySelector(".fill")


eraser.addEventListener("click", function() {
    color = "gray"
    console.log("Выбран ластик")
}
)
green_box.addEventListener("click", function() {
    color = "green"
    console.log("Выбран зелёный цвет")
}
)
turq_box.addEventListener("click", function() {
    color = "purple"
    console.log("Выбран фиолетовый цвет")
}
)
red_box.addEventListener("click", function() {
    color = "red"
    console.log("Выбран красный цвет")
}
)
blue_box.addEventListener("click", function() {
    color = "blue"
    console.log("Выбран синий цвет")
}
)
yellow_box.addEventListener("click", function() {
    color = "yellow"
    console.log("Выбран жёлтый цвет")
}
)
orange_box.addEventListener("click", function() {
    color = "orange"
    console.log("Выбран оранжевый цвет")
}
)
black_box.addEventListener("click", function() {
    color = "black"
    console.log("Выбран чёрный цвет")
}
)
white_box.addEventListener("click", function() {
    color = "white"
    console.log("Выбран белый цвет")
}
)
pink_box.addEventListener("click", function() {
    color = "pink"
    console.log("Выбран розовый цвет")
}
)
let container = document.querySelector(".net");
let isDrawing = false;

container.addEventListener("mousedown", function (event) {
    event.target.style.backgroundColor = color; // Цвет закраски
    isDrawing = true;
});

container.addEventListener("mousemove", function (event) {
    if (isDrawing == true) {
        event.target.style.backgroundColor = color;
    }
});

document.addEventListener("mouseup", function () {
    isDrawing = false;
});

//basket.addEventListener("click"), function () {
    //pass
//} 

document.getElementById('downloadBtn').addEventListener('click', function() {
    // Создаем canvas элемент
    const canvas = document.createElement('canvas');
    //const container = document.querySelector('.net');
    const blocks = document.querySelectorAll('.block');
    
    // Устанавливаем размеры canvas
    const cols = 50; // Количество колонок в сетке
    const rows = 50; // Количество строк в сетке
    const blockSize = 25; // Размер одного блока в пикселях
    
    canvas.width = cols * blockSize;
    canvas.height = rows * blockSize;
    const ctx = canvas.getContext('2d');
    
    // Заливаем canvas цветом фона (серый, как у блоков)
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Рисуем каждый блок на canvas
    blocks.forEach((block, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const color = window.getComputedStyle(block).backgroundColor;
        
        ctx.fillStyle = color;
        ctx.fillRect(col * blockSize, row * blockSize, blockSize, blockSize);
    });
    
    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.download = 'pixel-art.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});


// Найти все блоки сетки
let blocks = document.querySelectorAll('.block');

// Добавить обработчик события click для корзины
basket.addEventListener('click', function() {
    // Перебрать все блоки и сбросить их фоновый цвет на исходный
    blocks.forEach(block => {
        block.style.backgroundColor = 'gray'; // Сбросить фоновый цвет на серый
    });
});




// Переменные
let currentColor = 'black';
let fillMode = false;
const fillBtn = document.querySelector('.fill');
const blockss = document.querySelectorAll('.block');
const colors = document.querySelectorAll('.palitra > div:not(.fill)');

// Активация заливки
fillBtn.addEventListener('click', () => {
  fillMode = !fillMode;
  fillBtn.classList.toggle('active');
});

// Выбор цвета
colors.forEach(color => color.addEventListener('click', () => {
  currentColor = getComputedStyle(color).backgroundColor;
}));

// Заливка сетки
blockss.forEach(block => block.addEventListener('click', () => {
  if (fillMode) {
    blockss.forEach(b => b.style.backgroundColor = currentColor);
  } else {
    block.style.backgroundColor = currentColor;
  }
}));
