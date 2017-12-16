import * as React from 'react';

export function CategoryView() {
    return <div className="article-category">
        <input className="article-category-ipt" placeholder="Add Labels" type="text" />
        <div>
            <span className="article-category-label article-category-active">Computer Science</span>
            <span className="article-category-label">Art</span>
            <span className="article-category-label">Artifact Intelligence</span>
        </div>
    </div>;
}
