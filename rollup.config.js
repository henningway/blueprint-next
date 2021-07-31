import pkg from './package.json';
import filesize from 'rollup-plugin-filesize';
import typescript from 'rollup-plugin-typescript2';
import terser from 'rollup-plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';

const isProduction = process.env.NODE_ENV === 'production';

const input = 'src/index.ts';

const plugins = [nodeResolve(), typescript(), filesize(), isProduction && terser.terser()];

// export default (async () => ({
//     input: 'src/index.ts',
//     output: {
//         name: 'Blueprint',
//         file: 'dist/index.js',
//         format: 'umd'
//     },
//     plugins: [typescript(), filesize(), isProduction && (await import('rollup-plugin-terser')).terser()]
// }))();

export default [
    {
        input,
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true
        },
        plugins
    },
    {
        input,
        output: {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'default'
        },
        plugins
    }
];
