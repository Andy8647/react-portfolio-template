import React from 'react';
import IconLink from './IconLink';
import { Box } from '@mui/material';

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        <Box
            component={'img'}
            src={image}
            alt={'mockup'}
            width={'30vw'}
            style={{
                objectFit: 'cover',
                borderRadius: '25px',
                boxShadow:
                    '  0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n' +
                    '  0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n' +
                    '  0 12.5px 10px rgba(0, 0, 0, 0.06),\n' +
                    '  0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n' +
                    '  0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n' +
                    '  0 100px 80px rgba(0, 0, 0, 0.12)',
            }}
        />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        {live && (
          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
          </Box>
        )}

        {source && (
          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
