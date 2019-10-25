import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

import {settings} from '../../data/dataStore';

class Column extends React.Component {
    
    static propTypes = {
        title: PropTypes.node.isRequired,
        cards: PropTypes.array,
        icon: PropTypes.string.isRequired
    };
      
    render(){ 
        const   {title, icon, cards} = this.props;
        return (
          <section className={styles.component}>
            <h3 className={styles.title}>{this.props.title}
                <span className={styles.icon}>
                    <Icon name={this.props.icon} />
                </span>
                {this.props.title}
            </h3>
            <div className={styles.cards}>
                {cards.map(cardData => (
                    <Card key={cardData.id} {...cardData} />
                ))}  
            </div>
            {/* <div className={styles.creator}>
                <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
            </div> */}
          </section>
        )
    }
}


export default Column;