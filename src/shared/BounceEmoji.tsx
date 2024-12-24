


const BounceEmoji = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            style={{ backgroundColor: 'transparent' }}
        >
            <style>
                {`
                    @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                    }

                    .bouncing-text {
                    animation: bounce 3s ease-in-out infinite;
                    }
                `}
            </style>
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="50"
                className="bouncing-text"
            >
                🍱
            </text>
        </svg>
    );
};

export default BounceEmoji;
