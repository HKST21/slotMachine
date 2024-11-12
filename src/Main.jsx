import React, { useState, useEffect } from "react";
import firstSlotMachine from "./SlotMachineClass";
import './index.css';  

export default function Main() {
    const [slot, setSlot] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        const result = firstSlotMachine.spin();
        setSlot(result);
    }, []);

    const handleSpin = () => {
        if (slot.balance < 20) {  
            alert('GAME OVER');
            return;  
        }

        setIsSpinning(true);
        setTimeout(() => {
            const result = firstSlotMachine.spin();
            setSlot(result);
            setIsSpinning(false);
        }, 1000); 
    };

    if (!slot) return <div className="loading">Loading...</div>;

    return (
        <div className="slot-machine-container">
            <div className="slot-machine">
                <div className="machine-top">
                    <div className="logo">
                        RETRO SLOTS
                    </div>
                </div>

                <div className="display-container">
                    <div className="credits-display">
                        Credit: {slot.balance}
                    </div>
                    {slot.win > 0 && (
                        <div className="win-display">
                            Win: {slot.win}!
                        </div>
                    )}
                </div>

                <div className="reels-container">
                    <div className="reels-window">
                        {slot.symbols.map((symbol, index) => (
                            <div 
                                key={index} 
                                className={`reel ${isSpinning ? 'spinning' : ''}`}
                            >
                                {symbol}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="controls">
                    <button 
                        className="spin-button"
                        onClick={handleSpin}
                        disabled={isSpinning}
                    >
                        <span className="button-text">SPIN</span>
                    </button>
                </div>

                <div className="machine-bottom">
                    <div className="credit-info">
                        Made with ❤️ by [Stepan]
                    </div>
                </div>
            </div>
        </div>
    );
}