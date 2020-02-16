import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Append: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
Append the \`ele\` element to the end of the \`target\` element:

~~~ javascript
target.appendChild(ele);
~~~
`}
/>
<RelatedTasks tasks={[TaskType.Prepend]} />
</>
    );
};

export default Append;
