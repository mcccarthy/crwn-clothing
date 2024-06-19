import CategoryItem from '../category-item/category-item.component';
<<<<<<< HEAD

import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
=======
import './directory.styles.scss'

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
  )
}

export default Directory
>>>>>>> 4a5753784865fc6babd25709278a2bc502da9071
