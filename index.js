function drawTriangle(drawChar, rows, alignment) {
    let output = '';
    if (alignment == "left") {
        for (let i = 1; i <= rows; i++) {
            output += drawChar.repeat(i) + '\n';
        }
    } else if (alignment == "right") {
        for (let i = 1; i <= rows; i++) {
            let spaces = ' '.repeat(rows - i);
            output += spaces + drawChar.repeat(i) + '\n';
        }
    } else if (alignment == "center") {
        for (let i = 0; i < rows; i++) {
            // Add spaces before the '*' characters
            for (let j = 0; j < rows - i - 1; j++) {
                output += ' ';
            }
            // Add '*' characters
            for (let k = 0; k <= i; k++) {
                output += '* ';
            }
            output += '\n';
        }
    }
    console.log(output);
}

function drawRectangle(drawChar, rows, columns, alignment) {
    let output = '';
    for (let i = 0; i < rows; i++) {
        let spaces = '';
        if (alignment === 'right') {
            spaces = ' '.repeat(columns - 1);
        } else if (alignment === 'center') {
            spaces = ' '.repeat(Math.floor((columns - rows) / 2));
        }
        output += spaces + drawChar.repeat(columns) + '\n';
    }
    console.log(output);
}

function drawSquare(drawChar, rows, alignment) {
    drawRectangle(drawChar, rows, rows, alignment);
}

function drawShape(shapeType, alignment, drawChar, rows, columns) {
    switch (shapeType.toLowerCase()) {
        case 'triangle':
            drawTriangle(drawChar, rows, alignment);
            break;
        case 'rectangle':
            drawRectangle(drawChar, rows, columns, alignment);
            break;
        case 'square':
            drawSquare(drawChar, rows, alignment);
            break;
        default:
            console.log('Invalid shape type');
            break;
    }
}

// // Example usage
drawShape('rectangle', 'left', '1', 5, 10);
drawShape('square', 'center', 'A', 5, 5);
drawShape('triangle', 'right', '8', 10, 10);
drawShape('triangle', 'left', '8', 10, 10);
drawShape('triangle', 'center', '8', 10, 10);