import { jss } from 'react-jss';
import { reset, typography } from 'jss-reset';
import font from 'url:typeface-muli/files/muli-latin-400.woff2';

jss.createStyleSheet(reset, { index: 1, meta: 'reset' }).attach();
jss.createStyleSheet(typography, { index: 1, meta: 'reset' }).attach();

jss.createStyleSheet({
    '@global body': {
        fontFamily: 'muli, verdana',
        width: 1440,
        maxWidth: '100%',
        padding: 25,
        margin: [0, 'auto'],
    },
    '@font-face': [{
        fontFamily: 'muli, verdana',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontDisplay: 'fallback',
        src: `url(${font}) format('woff2')`,
    }],
    '@global body > main': {
        margin: [0, 'auto'],
    },
}).attach();

export const theme = {};
