function generateBlocks() {
    const container_for_Block = document.getElementById('container-for-Block');
    const block_Number = parseInt(document.getElementById('blockNumber').value);
    container_for_Block.innerHTML = '';

    if (isNaN(block_Number) || block_Number < 1 || block_Number > 8) {
        alert('Please enter a number between 1 and 8.');
        return;
    }

    let delay = 0;
    const delayIncrement = 0.1;  // Delay increment for each block

    for (let i = 1; i <= block_Number; i++) {
        const line = document.createElement('div');
        line.className = 'line';

        const leftBlocks = document.createElement('div');
        leftBlocks.className = 'blocks';
        for (let j = 0; j < i; j++) {
            const block = document.createElement('div');
            block.className = 'block';
            block.style.animationDelay = `${delay}s`;
            delay += delayIncrement;
            leftBlocks.appendChild(block);
        }

        const rightBlocks = document.createElement('div');
        rightBlocks.className = 'blocks';
        for (let j = 0; j < i; j++) {
            const block = document.createElement('div');
            block.className = 'block';
            block.style.animationDelay = `${delay}s`;
            delay += delayIncrement;
            rightBlocks.appendChild(block);
        }

        line.appendChild(leftBlocks);
        line.appendChild(rightBlocks);
        container_for_Block.appendChild(line);
    }
}