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

    for (let col = 0; col < 8; col++) {
        const pawn = document.createElement('div');
        pawn.classList.add('pawn');
        pawn.style.left = `${col * tileSize + 5}px`;
        pawn.style.top = `${6 * tileSize + 5}px`;
        chessboard.appendChild(pawn);
    }

    let isDragging = false

    pawn.addEventListener('mousedown', (e) => {
        isDragging = true;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            pawn.style.left = `${e.pageX - 20}px`;
            pawn.style.top = `${e.pageY - 20}px`;
        }
    });

    document.addEventListener('mouseup', (e) => {
        if (isDragging) {
            isDragging = false;

            //! Read getBoudingClientRect
            const boardRectangle = chessboard.getBoundingClientRect();
            const x = e.pageX - boardRectangle.left;
            const y = e.pageY - boardRectangle.top;

            pawnX = Math.min(Math.max(Math.floor(x / tileSize), 0), 7);
            pawnY = Math.min(Math.max(Math.floor(y / tileSize), 0), 7);

            pawn.style.left = `${pawnX * tileSize + 5}px`;
            pawn.style.top = `${pawnY * tileSize + 5}px`;
        }
    })
});

