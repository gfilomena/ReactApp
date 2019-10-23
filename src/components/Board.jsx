import React from 'react';
import { Square } from './Square';

export class Board extends React.Component {
    renderSquare(i, win) {
        return (
            <Square
                key={i}
                highlight={win ? 'highlight' : ''}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {

        const size = 3;
        let squares = [];
        const winnerline = this.props.winnerLine;
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                const num = i * size + j;
                let win = false;
                if (winnerline.length > 0) {
                    win = winnerline.includes(num)
                }
                row.push(this.renderSquare(num, win))
            }
            squares.push(<div key={i} className="board-row"> {row} </div>)
        }

        return (
            <div>{squares}</div>
        );
    }
}