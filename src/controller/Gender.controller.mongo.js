import * as genderService from '../services/Gender.service.mongo.js'

export const createGender = async (req, res) => {
  try {
    const gender = await genderService.createGenderService(req.body)
    console.log('Create Gênero')
    res.status(201).json(gender)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const listGenders = async (req, res) => {
  try {
    const genders = await genderService.findAllGendersService()
    res.status(200).json(genders)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const findGenderById = async (req, res) => {
  try {
    const gender = await genderService.findGenderByIdService(req.params.id)
    if (!gender) {
      res.status(404).json({ message: 'Gênero não encontrado' })
      return
    }
    res.status(200).json(gender)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const updateGender = async (req, res) => {
  try {
    const gender = await genderService.updateGenderService(req.params.id, req.body)
    if (!gender) {
      res.status(404).json({ message: 'Gênero não encontrado' })
      return
    }
    res.status(200).json(gender)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const deleteGender = async (req, res) => {
  try {
    const gender = await genderService.findGenderByIdAndRemoveService(req.params.id)
    if (!gender) {
      res.status(404).json({ message: 'Gênero não encontrado' })
      return
    }
    res.status(200).json({ message: 'Gênero excluído com sucesso' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};
