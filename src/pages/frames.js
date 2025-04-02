import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

const frames = [
    `discord.gg/skateboard
+-------------------------------------+
|        |                      \\    |
|        |      _                \\   |
|         '.   | |                 |  |
|          |   //                  |  |
|          |  |/                   \\ |
|          |  /                |\\  | |
|          | |                 | |  | |
|          | |                .  |  | |
|          ; |       .'|     <   |  \\|
|         /  |     .-  '-\\    \\\\__/|
|        |   |     |      \\    :     |
|         \\_/ \\    |     \\   |     |
|              :   |        \\  |     |
|              |   |        |   \\    |
|             _|   \\        |    .   |
|           .'      ;        \\    )  |
|'8\\________|______/__________\\_.:P'|
|  'Y8888888888888888888888888888P'   |
|        (_)               (_)lka     |
+------------------------------------+
    `,
    `SKATEHIVE
+------------------------------------+
|              /                 |   |
|             /                  |   |
|            /                   |   |
|           |                    |   |
|           |          .'        |   |
|           |        .'  |       |   |
|           \      .'     \      |   |
|            |     |       \     |   |
|            |    /         ;    |   |
|            |   |          |   /    |
|            |   |          |   |    |
|            |   |          \   |    |
|            |   :           |  |    |
|            /    \          |  |    |
| _         /     .>         |   \   |
| "88b.__  |____.'           \   |   |
|   Y88888888888Oooooo._      \__| _ |
|       (_)    'Y888888888888888888P'|
|                         (_)lka     |
+------------------------------------+
    `,
    `discord.gg/skateboard
+------------------------------------+
|   \         _.' \           |      |
|    \     .-'      \         |      |
|     \   |           \       |      |
|      \   \            \     |      |
|       \  |             \     \     |
|        :  \             |     \    |
|        \   \__          |     |    |
|       88b     /          \    |    |
|        Y8b   |           |     \   |
|         '8b  |            \    |   |
|          _'8b|             |   |   |
|         (_) '8b            |   |   |
|               '8b          |   |   |
|                 '8b        |   |   |
|                   '8b     /    |   |
|                     '8b   |    |   |
|                       _8b |    /   |
|                      (_)Y8ooooP    |
|                        lka         |
+------------------------------------+
    `,
    `SKATEHIVE
+------------------------------------+
|\   |              '.     |         |
| \   \               \    |         |
|  \   \               \    \        |
|  |    '.              \    |       |
|  <     /               \   |       |
|   \ .'/_               |    \      |
|    |8888b.              \   |      |
|    Y888888b.             \  |      |
|     Y8888(_)b.           |  |      |
|       Y8//88888b.         |   \    |
|       (_)Y888888b.        >   |    |
|           'Y ⌐◨-◨ 8b.    |    |    |
|             'Y888888b.   |    |    |
|               'Y888888b. |    /    |
|                 'Y888(_)b.   /     |
|                   'Y//8888b.       |
|                   (_)Y888888)      |
|                        """""lka    |
|                                    |
+------------------------------------+
    `,
    `discord.gg/skateboard
+------------------------------------+
|     _\  \                 |     |  |
|    /     \                |     |  |
|   /    .'                 \     |  |
|  /   .' __                 \    |  |
|  \_.' .d88b._               \   |  |
|      888888(_)              /   |  |
|       Y8888//88b.           |   \  |
|        Y88//888888b.         \   \ |
|         (_)8888888888b.       \   ||
|            'Y888 ⌐◨-◨ 88b. _   \  ||
|               'Y8888888888(_)   "" |
|                  'Y8888888//8b.    |
|                     'Y888//8888\   |
|                        (_)888888)  |
|                          'Y888P'   |
|                            lka     |
|                                    |
|                                    |
|                                    |
+------------------------------------+

    `,
    `SKATEHIVE
+------------------------------------+
|/""      |                  |  |    |
|\___..--'                   |   \   |
|                            |    \  |
|                             \    . |
|                              '-..' |
|             __                     |
|      ____  (_))                    |
|      Y8888888b.                    |
|              Y88b.                 |
|                 'Y8b._    __       |
|                    'Y8b._(_))      |
|                        Y888b.      |
|                           'Y8b.    |
|                          lka'Y8b.  |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
    `,
    `discord.gg/skateboard
+------------------------------------+
|    \   |            \   |          |
|    |   |             \  |          |
|    /    \            |  |          |
|  _/      \           |   \         |
| |   ___..'           |   |         |
|  """                 |   |         |
|   ..ooooo...          """"         |
|  d888888888888888oooo....          |
|  888888888888 ⌐◨-◨ 8888888888b.    |
|  'Y8888888888888888888888888888|   |
|          """"""8888888888888888;   |
|                    '''8888888P'    |
|                         lka        |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
`,
    ` ⌐◨-◨
+------------------------------------+
|     \    (         \     |  |      |
|      \    \         \    /  |      |
|       \   |         '   |   |      |
|       |   |          \  :___;      |
|       |   |           \   |        |
|       |   |           |   |        |
|       ;    \          |   |        |
|     .'     |          |   |        |
|   .(___..--'___________\   \__.8|  |
|   'Y8888888888888888888b.__'88P'   |
|        (_)-'            (_)-lka    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
`,
    `SKATEHIVE
+------------------------------------+
|        /          .'  .' |         |
|       /        .'.  .'   |         |
|      |       .'.'  /    /          |
|      \      /.'   /    |           |
|      |     / |   /\    |           |
|      |    /  |  /  \   |           |
|       \   |   '"    \   \          |
|       |   |         |    |         |
|        \  |          \   |         |
|        |  |           \  |         |
|        |  \           |  |         |
|        /   .           \  \        |
|       /    .           |   \       |
|   .--|___.'            |    \      |
|    'Y8888888888oooooooo:____:__..  |
|      '"(_)"""""""''Y888888888888/  |
|                         (_)        |
+------------------------------------+
`,
    `discord.gg/skateboard
+------------------------------------+
|         |      _.'  /   |          |
|         |   _.' _.'    /           |
|         /_.' _.'      |            |
|       .''  .'         |            |
|      /   .'    _      |            |
|     |_.-'    .' \     |            |
|     |       /   /     |            |
|     |      '    \     |            |
|      \     |     \    |            |
|       \    |      |   |            |
|       |    |      |   |            |
|        \   |      |   :            |
|        |   |       \   \           |
|        |   |        \   :          |
|        /   |         \  |          |
|   __  /    |          \  \         |
|  8888<____.'888ooo..._|   \__oo.   |
|    "Y88888888888888888b___d88P'    |
|       (_)          """ (_)         |
+------------------------------------+
`,
    ` ⌐◨-◨
+------------------------------------+
|        /          .'  .' |         |
|       /        .'.  .'   |         |
|      |       .'.'  /    /          |
|      \      /.'   /    |           |
|      |     / |   /\    |           |
|      |    /  |  /  \   |           |
|       \   |   '"    \   \          |
|       |   |         |    |         |
|        \  |          \   |         |
|        |  |           \  |         |
|        |  \           |  |         |
|        /   .           \  \        |
|       /    .           |   \       |
|   .--|___.'            |    \      |
|    'Y8888888888oooooooo:____:__..  |
|      '"(_)"""""""''Y888888888888/  |
|                         (_)        |
|                                    |
+------------------------------------+
`,
    ` ⌐◨-◨
+------------------------------------+
|/""      |                  |  |    |
|\___..--'                   |   \   |
|                            |    \  |
|                             \    . |
|                              '-..' |
|             __                     |
|      ____  (_))                    |
|      Y8888888b.                    |
|              Y88b.                 |
|                 'Y8b._    __       |
|                    'Y8b._(_))      |
|                        Y888b.      |
|                           'Y8b.    |
|                          lka'Y8b.  |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
`,
    `discord.gg/skateboard
+------------------------------------+
|    \   |            \   |          |
|    |   |             \  |          |
|    /    \            |  |          |
|  _/      \           |   \         |
| |   ___..'           |   |         |
|  """                 |   |         |
|   ..ooooo...          """"         |
|  d888888888888888oooo....          |
|  888888888888 ⌐◨-◨ 8888888888b.    |
|  'Y8888888888888888888888888888|   |
|          """"""8888888888888888;   |
|                    '''8888888P'    |
|                         lka        |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
`,
    `SKATEHIVE
+------------------------------------+
|     \    (         \     |  |      |
|      \    \         \    /  |      |
|       \   |         '   |   |      |
|       |   |          \  :___;      |
|       |   |           \   |        |
|       |   |           |   |        |
|       ;    \          |   |        |
|     .'     |          |   |        |
|   .(___..--'___________\   \__.8|  |
|   'Y8888888888888888888b.__'88P'   |
|        (_)-'            (_)-lka    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
`,
    ` ⌐◨-◨
+------------------------------------+
|        /          .'  .' |         |
|       /        .'.  .'   |         |
|      |       .'.'  /    /          |
|      \      /.'   /    |           |
|      |     / |   /\    |           |
|      |    /  |  /  \   |           |
|       \   |   '"    \   \          |
|       |   |         |    |         |
|        \  |          \   |         |
|        |  |           \  |         |
|        |  \           |  |         |
|        /   .           \  \        |
|       /    .           |   \       |
|   .--|___.'            |    \      |
|    'Y8888888888oooooooo:____:__..  |
|      '"(_)"""""""''Y888888888888/  |
|                         (_)        |
|                                    |
+------------------------------------+
`,
    `discord.gg/skateboard
+------------------------------------+
|         |      _.'  /   |          |
|         |   _.' _.'    /           |
|         /_.' _.'      |            |
|       .''  .'         |            |
|      /   .'    _      |            |
|     |_.-'    .' \     |            |
|     |       /   /     |            |
|     |      '    \     |            |
|      \     |     \    |            |
|       \    |      |   |            |
|       |    |      |   |            |
|        \   |      |   :            |
|        |   |       \   \           |
|        |   |        \   :          |
|        /   |         \  |          |
|   __  /    |          \  \         |
|  8888<____.'888ooo..._|   \__oo.   |
|    "Y88888888888888888b___d88P'    |
|       (_)          """ (_)         |
+------------------------------------+
`,
    ` ⌐◨-◨
+------------------------------------+
|        /          .'  .' |         |
|       /        .'.  .'   |         |
|      |       .'.'  /    /          |
|      \      /.'   /    |           |
|      |     / |   /\    |           |
|      |    /  |  /  \   |           |
|       \   |   '"    \   \          |
|       |   |         |    |         |
|        \  |          \   |         |
|        |  |           \  |         |
|        |  \           |  |         |
|        /   .           \  \        |
|       /    .           |   \       |
|   .--|___.'            |    \      |
|    'Y8888888888oooooooo:____:__..  |
|      '"(_)"""""""''Y888888888888/  |
|                         (_)        |
|                                    |
+------------------------------------+
`,
    `SKATEHIVE
+------------------------------------+
|/""      |                  |  |    |
|\___..--'                   |   \   |
|                            |    \  |
|                             \    . |
|                              '-..' |
|             __                     |
|      ____  (_))                    |
|      Y8888888b.                    |
|              Y88b.                 |
|                 'Y8b._    __       |
|                    'Y8b._(_))      |
|                        Y888b.      |
|                           'Y8b.    |
|                          lka'Y8b.  |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
`,
    `discord.gg/skateboard
+------------------------------------+
|    \   |            \   |          |
|    |   |             \  |          |
|    /    \            |  |          |
|  _/      \           |   \         |
| |   ___..'           |   |         |
|  """                 |   |         |
|   ..ooooo...          """"         |
|  d888888888888888oooo....          |
|  888888888888 ⌐◨-◨ 8888888888b.    |
|  'Y8888888888888888888888888888|   |
|          """"""8888888888888888;   |
|                    '''8888888P'    |
|                         lka        |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
`,
    `SKATEHIVE
+------------------------------------+
|     \    (         \     |  |      |
|      \    \         \    /  |      |
|       \   |         '   |   |      |
|       |   |          \  :___;      |
|       |   |           \   |        |
|       |   |           |   |        |
|       ;    \          |   |        |
|     .'     |          |   |        |
|   .(___..--'___________\   \__.8|  |
|   'Y8888888888888888888b.__'88P'   |
|        (_)-'            (_)-lka    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
|                                    |
+------------------------------------+
`
];

const Animation = ({ interval = 200, ...props }) => {
    const [frameIndex, setFrameIndex] = useState(0);

    const updateFrame = useCallback(() => {
        setFrameIndex((prevFrameIndex) => (prevFrameIndex + 1) % frames.length);
    }, []);

    useEffect(() => {
        console.log("Interval set to:", interval);
        const frameInterval = setInterval(() => {
            console.log("Updating frame...");
            updateFrame();
        }, interval);
        return () => clearInterval(frameInterval);
    }, [updateFrame, interval]);

    return (
        <div style={wrapperStyle}>
            <pre {...props} style={preStyle}>
                {frames[frameIndex]}
            </pre>
        </div>
    );
};

Animation.propTypes = {
    interval: PropTypes.number,
};

const wrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '550px',
    overflow: 'hidden', 
    backgroundColor: 'transparent',
};

const preStyle = {
    margin: 0,
    padding: 0,
    fontFamily: 'monospace',
    fontSize: '1rem',
    lineHeight: '1.5',
    whiteSpace: 'pre', 
    wordWrap: 'normal',
    color: '#00ff00', 
    backgroundColor: 'black',
    textAlign: 'center',
    overflowx: 'auto',
    display: 'block',
};

export default Animation;