<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlayerEditProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // Игрок может редактировать только данные своего профиля
        return $this->user()->tokenCan('play-game')
            && $this->input('user_id') == $this->user()->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'nullable|sometimes|max:255',
            'email' => 'nullable|sometimes|email|unique:users,email,' . $this->user,
        ];
    }
}
