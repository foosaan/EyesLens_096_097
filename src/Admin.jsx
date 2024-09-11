import React, { useState, useEffect } from 'react';
import { supabase } from '@/createclient';
import toast from 'react-hot-toast';

const PengelolaanMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [newItem, setNewItem] = useState({ title: '', description: '', price: '' });
    const [editingItem, setEditingItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchMenuItems();
    }, []);

    const fetchMenuItems = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase.from('menu_items').select('*');
            if (error) throw error;
            setMenuItems(data);
        } catch (error) {
            console.error('Error fetching menu items:', error);
            setError('Gagal memuat item menu.');
            toast.error('Gagal memuat item menu.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddItem = async () => {
        try {
            const { data, error } = await supabase.from('menu_items').insert([newItem]);
            if (error) throw error;
            setMenuItems([...menuItems, ...data]);
            setNewItem({ title: '', description: '', price: '' });
            toast.success('Item menu berhasil ditambahkan.');
        } catch (error) {
            console.error('Error adding menu item:', error);
            toast.error('Gagal menambahkan item menu.');
        }
    };

    const handleEditItem = (item) => {
        setEditingItem(item);
    };

    const handleUpdateItem = async () => {
        try {
            const { data, error } = await supabase.from('menu_items').update(editingItem).match({ id: editingItem.id });
            if (error) throw error;
            setMenuItems(menuItems.map(item => (item.id === editingItem.id ? data[0] : item)));
            setEditingItem(null);
            toast.success('Item menu berhasil diperbarui.');
        } catch (error) {
            console.error('Error updating menu item:', error);
            toast.error('Gagal memperbarui item menu.');
        }
    };

    const handleDeleteItem = async (id) => {
        try {
            const { error } = await supabase.from('menu_items').delete().match({ id });
            if (error) throw error;
            setMenuItems(menuItems.filter(item => item.id !== id));
            toast.success('Item menu berhasil dihapus.');
        } catch (error) {
            console.error('Error deleting menu item:', error);
            toast.error('Gagal menghapus item menu.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="space-y-6">
            {/* Tambah Item Menu Baru */}
            <div className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Tambah Item Menu Baru</h2>
                <input
                    type="text"
                    placeholder="Judul"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="text"
                    placeholder="Deskripsi"
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="number"
                    placeholder="Harga"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    className="border p-2 mb-2 w-full"
                />
                <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 rounded">Tambah Item</button>
            </div>

            {/* Tabel Item Menu */}
            <div className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Item Menu</h2>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Judul</th>
                            <th className="text-left">Deskripsi</th>
                            <th className="text-left">Harga</th>
                            <th className="text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td className="text-right">
                                    <button onClick={() => handleEditItem(item)} className="bg-yellow-500 text-white p-1 rounded">Edit</button>
                                    <button onClick={() => handleDeleteItem(item.id)} className="bg-red-500 text-white p-1 rounded ml-2">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit Item Menu */}
            {editingItem && (
                <div className="bg-card p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Edit Item Menu</h2>
                    <input
                        type="text"
                        placeholder="Judul"
                        value={editingItem.title}
                        onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        value={editingItem.description}
                        onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="number"
                        placeholder="Harga"
                        value={editingItem.price}
                        onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                        className="border p-2 mb-2 w-full"
                    />
                    <button onClick={handleUpdateItem} className="bg-blue-500 text-white p-2 rounded">Perbarui Item</button>
                    <button onClick={() => setEditingItem(null)} className="bg-gray-500 text-white p-2 rounded ml-2">Batal</button>
                </div>
            )}
        </div>
    );
};



export default PengelolaanMenu;
