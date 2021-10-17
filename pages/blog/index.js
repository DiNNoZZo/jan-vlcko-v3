import React, { useContext } from 'react';
import AnimationContext from '../../store/animation-context';
import Progress from '../../components/loader-nprogress/progress';

function BlogPage() {
  const AnimCtx = useContext(AnimationContext);
  return <Progress />;
}

export default BlogPage;
