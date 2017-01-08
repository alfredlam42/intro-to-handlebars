class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :affinity
      t.string :description
      t.integer :pokedex_number
      t.timestamps
    end
  end
end