import './TaggedElement.css';

const TaggedElement = (props) => {
  const component = props.component;
  const enableTagging = props.enableTagging;

  return (
    <div className={enableTagging ? 'tagged-element': ''}>
      {component}
    </div>
  );
};

export default TaggedElement;
