module.exports = {
    app: {
        px: '.',
        token: 'MTAwMDM0OTAxNjU3MzM1ODEyMA.G6PPvV.w7s0sY5fjHZKVRxLm6A2Cli3k-huPyosceDrM8',
        playing: 'by Reichskommissar ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
