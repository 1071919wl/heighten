import React from 'react';


class Category extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCategory(this.props.categoryId);
    }

    render(){
        let category = '';
        this.props.category ? category = this.props.category : category = null
        return (
            category === null ? <div></div> :
            <div>
                <ul>
                    {category.products.map( (el, i) =>  (
                        <li key={i}>
                            {el.name}
                        </li>
                    ))}
                </ul>
                



            </div>
        )
    }
}

export default Category;