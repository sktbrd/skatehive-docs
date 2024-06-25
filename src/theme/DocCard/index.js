import isInternalUrl from '@docusaurus/isInternalUrl';
import Link from '@docusaurus/Link';
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

function CardContainer({ href, children }) {
  return (
    <Link href={href} className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}

CardContainer.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function CardLayout({ href, icon, title, description }) {
  return (
    <CardContainer href={href}>
      <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      {description && (
        <p className={clsx('text--truncate', styles.cardDescription)} title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}

CardLayout.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

function CardCategory({ item }) {
  const href = findFirstCategoryLink(item);
  if (!href) {
    return null;
  }
  return (
    <div className={styles.cardCategory}>
      <CardLayout
        href={href}
        icon="🗃️"
        title={item.label}
        description={translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description: 'The default description for a category card in the generated index about how many items this category includes',
          },
          { count: item.items.length }
        )}
      />
    </div>
  );
}

CardCategory.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
};

function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? '🛹' : '🛹';
  const doc = useDocById(item.docId ?? undefined);
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={doc?.description}
    />
  );
}

CardLink.propTypes = {
  item: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    docId: PropTypes.string,
  }).isRequired,
};

export default function DocCardWrapper({ item }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`Unknown item type ${JSON.stringify(item)}`);
  }
}

DocCardWrapper.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};
