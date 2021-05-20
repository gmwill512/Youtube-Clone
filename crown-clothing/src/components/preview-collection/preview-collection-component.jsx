import React from 'react';
import menuItemComponent from '../menu-item/menu-item.component';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

function PreviewCollection({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItem key={id} {...otherItemsProps} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
