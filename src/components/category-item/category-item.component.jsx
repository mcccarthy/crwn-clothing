<<<<<<< HEAD
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
=======
/** @format */

import './category-item.styles.scss';

const CategoryItem = ({category}) => {
	const {imageUrl, title} = category;
	return (
		<div className='category-container'>
				<div
					className='background-image' style={{
					backgroundImage: `url(${imageUrl})`,
					}}
			/>
				<div className='category-body-container'>
					<h2>{title}</h2>
					<p>Shop Now</p>
				</div>
	</div>
		
	);
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
};

export default CategoryItem;
