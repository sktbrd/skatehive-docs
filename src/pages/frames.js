import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

const frames = [
    `
        |                      \\    
        |      _                \\   
         '.   | |                 |  
          |   //                  |  
          |  |/                   \\ 
          |  /                |\\  | 
          | |                 | |  | 
          | |                .  |  | 
          ; |       .'|     <   |  \\
         /  |     .-  '-\\    \\\\__/
        |   |     |      \\    :     
         \\_/ \\    |     \\   |     
              :   |        \\  |     
              |   |        |   \\    
             _|   \\        |    .   
           .'      ;        \\    )  
'8\\________|______/__________\\_.:P'
  'Y8888888888888888888888888888P'   
        (_)               (_)lka     
    `,
    `
              /                 |  
             /                  |  
            /                   |  
           |                    |  
           |          .'        |  
           |        .'  |       |  
           \      .'     \\      |  
            |     |       \\     |  
            |    /         ;    |  
            |   |          |   /   
            |   |          |   |   
            |   |          \\   |   
            |   :           |  |   
            /    \\          |  |   
 _         /     .>         |   \\  
 "88b.__  |____.'           \\   |  
   Y88888888888Oooooo._      \\__| _
       (_)    'Y888888888888888888P'
                         (_)lka     

    `,
   `
   \\         _.' \\           |      
    \\     .-'      \\         |      
     \\   |           \\       |      
      \\   \\            \\     |     
       \\  |             \\     \\    
        :  \\             |     \\    
        \\   \\__          |     |    
       88b     /          \\    |    
        Y8b   |           |     \\   
         '8b  |            \\    |   
          _'8b|             |   |   
         (_) '8b            |   |   
               '8b          |   |   
                 '8b        |   |   
                   '8b     /    |   
                     '8b   |    |   
                       _8b |    /   
                      (_)Y8ooooP    
                        lka         
    `,
    `
\\   |              '.     |         
 \\   \\              \\    |         
  \\   \\              \\    \\        
  |    '.              \\     |       
  <     /               \\    |       
   \\ .'/_               |   \\      
    |8888b.              \\   |      
    Y888888b.             \\  |      
     Y8888(_)b.            |  |      
       Y8//88888b.         |   \\    
       (_)Y888888b.        >   |    
           'Y ⌐◨-◨ 8b.    |    |    
             'Y888888b.   |    |    
               'Y888888b. |    /    
                 'Y888(_)b.   /     
                   'Y//8888b.       
                   (_)Y888888)      
                        """""lka    
                                    

    `,
    `
     _\\  \\                 |     |  
    /     \\                |     |  
   /    .'                 \\     |  
  /   .' __                 \\    |  
  \\_.' .d88b._              \\   |  
      888888(_)              /   |  
       Y8888//88b.           |   \\  
        Y88//888888b.         \\   \\ 
         (_)8888888888b.       \\   |
            'Y888 ⌐◨-◨ 88b. _   \\  |
               'Y8888888888(_)   "" 
                  'Y8888888//8b.    
                     'Y888//8888\\   
                        (_)888888)  
                          'Y888P'   
                            lka     


    `,
    `
/""      |                  |  |    |
\\___..--'                   |   \\   
                            |    \\  
                             \\    . 
                              '-..' 
             __                     
      ____  (_))                    
      Y8888888b.                    
              Y88b.                 
                 'Y8b._    __       
                    'Y8b._(_))      
                        Y888b.      
                           'Y8b.    
                          lka'Y8b.  

    `,
    `
    \\   |            \\   |          
    |   |             \\  |          
    /    \\            |  |          
  _/      \\           |   \\         
 |   ___..'           |   |         
  """                 |   |         
   ..ooooo...          """"         
  d888888888888888oooo....          
  888888888888 ⌐◨-◨ 8888888888b.    
  'Y8888888888888888888888888888|   
          """"""8888888888888888;   
                    '''8888888P'    
                         lka        

`,
    `

    \\    (         \\     |  |      
      \\    \\         \\    /  |      
       \\   |         '   |   |      
       |   |          \\  :___;      
       |   |           \\   |        
       |   |           |   |        
       ;    \\          |   |        
     .'     |          |   |        
   .(___..--'___________\\   \\__.8|  
   'Y8888888888888888888b.__'88P'   
        (_)-'            (_)-lka    
                                    
`
];

// normalize frames to identical width & height
function normalizeFrames(frames) {
    const split = frames.map(f => f.split('\n'));
    const maxH = Math.max(...split.map(f => f.length));
    const maxW = Math.max(...split.flatMap(f => f.map(l => l.length)));
    return split.map(lines => {
        const padLine = l => l + ' '.repeat(maxW - l.length);
        const padded = lines.map(padLine);
        const extras = Array(maxH - lines.length).fill(' '.repeat(maxW));
        return padded.concat(extras).join('\n');
    });
}
const normalizedFrames = normalizeFrames(frames);

const Animation = ({ interval = 200, ...props }) => {
    const [frameIndex, setFrameIndex] = useState(0);

    const updateFrame = useCallback(() => {
        setFrameIndex(i => (i + 1) % normalizedFrames.length);
    }, []);

    useEffect(() => {
        const frameInterval = setInterval(updateFrame, interval);
        return () => clearInterval(frameInterval);
    }, [updateFrame, interval]);

    return (
        // <div style={wrapperStyle}>
            <pre {...props} style={preStyle}>
                {normalizedFrames[frameIndex]}
            </pre>
        // </div>
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
    // lineHeight: '1.5',
    // whiteSpace: 'pre', 
    wordWrap: 'normal',
    color: '#00ff00', 
    backgroundColor: 'black',
    textAlign: 'center',
    overflowx: 'auto',
    display: 'block',
};

export default Animation;