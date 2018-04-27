import React from 'react';
import {HashRouter, Route, NavLink} from 'react-router-dom';
import '../../../public/css/index.pcss';
import Seconds from '../common/Seconds';

import Shop from '../shop/Index';
import demo1 from '../demo/router/demo1/Demo1.bundle'
import demo2 from '../demo/router/demo2/Demo2.bundle'
// {/* <Seconds title="首页" /> */}
const Index = () =>
  <Seconds title = "首页" />;

export default Index;