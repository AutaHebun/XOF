import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

class Paginator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
		};
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
		this.goToPage = this.goToPage.bind(this);
	}
	navClasses() {
		const totalPages = Math.ceil(this.props.amountData / this.props.elementsPerPage);
		const prevClasses = classNames('icon item', {
			'disabled': this.state.currentPage === 0,
		});
		const postClasses = classNames('icon item', {
			'disabled': this.state.currentPage === totalPages - 1,
		});

		return [prevClasses, postClasses];
	}

	prevPage() {
		const prevPageIndex = this.state.currentPage - 1;
		this.goToPage(prevPageIndex);
	}

	nextPage() {
		const nextPageIndex = this.state.currentPage + 1;
		this.goToPage(nextPageIndex);
	}

	goToPage(index) {
		console.log('index', index);
		this.setState({
			currentPage: index,
		});
		this.props.renderFunction(index);
	}

	renderPaginationControls() {
		const pageControls = [];
		const totalPages = Math.ceil(this.props.amountData / this.props.elementsPerPage);
		for (let i = 0; i < totalPages; i++) {
			const pageClass = classNames('item', {
				'active': this.state.currentPage === i,
			});
			pageControls.push(<a key={i} className={pageClass} onClick={() => this.goToPage(i)}>{i + 1}</a>);
		}
		return pageControls;
	}

	render() {
		const [prevClass, postClass] = this.navClasses();
		return (
				<div className="ui right floated pagination menu">
					<a className={prevClass} onClick={this.prevPage}>
						<i className="left chevron icon"></i>
					</a>
					{this.renderPaginationControls()}
					<a className={postClass} onClick={this.nextPage}>
						<i className="right chevron icon"></i>
					</a>
				</div>
		);
	}
}

Paginator.propTypes = {
	amountData: PropTypes.number.isRequired,
	renderFunction: PropTypes.func.isRequired,
	elementsPerPage: PropTypes.number.isRequired,
};

export default Paginator;
