class TextItem < ApplicationRecord
  validates :text, presence: true

  before_save :calculate_vowels

  self.per_page = 15

  private

  def calculate_vowels
    self.vowels_count = text.downcase.count('aeiou')
  end
end
