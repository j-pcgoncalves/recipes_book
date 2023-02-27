import { Component } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipeList',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test.', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'),
        new Recipe('A Test Recipe', 'This is simply a test.', 'https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg'),
    ];
}