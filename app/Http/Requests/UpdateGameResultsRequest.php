<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGameResultsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->tokenCan('manage-game');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'game_id' => 'required|integer',
            'results' => 'required|array',
            'results.*.user_id' => 'required|integer',
            'results.*.user_place' => 'required|integer|between:1,5',
        ];
    }
}
