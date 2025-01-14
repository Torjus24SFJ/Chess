document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');
    const tileSize = 50;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const tile = document.createElement('div')
            tile.classList.add('tile')
            if ((row + col) % 2 === 0) {
                tile.classList.add('light')
            }
            else {
                tile.classList.add('dark')
            }
            chessboard.appendChild(tile)
        }
    }

    let pawnX = 0;
    let pawnY = 0;

    pawn.style.left = `${pawnX * tileSize + 5}px`
    pawn.style.right = `${pawnY * tileSize + 5}px`

    let isDragging = false

    pawn.addEventListener('mousedown', (e) => {
        isDragging = true;
    })

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            pawn.style.left = `${e.pageX - 20}px`;
            pawn.style.top = `${e.pageY - 20}px`;
        }
    })

    document.addEventListener('mouseup', (e) => {
        if(isDragging){
            isDragging = false;

            //TODO moving and snapping to tile
        }
    })
});

