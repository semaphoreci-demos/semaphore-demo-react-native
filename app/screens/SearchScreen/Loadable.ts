/**
 * Asynchronously loads the component for HomeScreen
 */

import loadable from 'react-suspense-loadable';

export default loadable(() => import('./index'));
